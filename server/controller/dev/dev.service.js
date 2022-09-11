const { pool } = require('../../db.js');
const uploadS3 = require('../../util/s3Uploader.js');

const appList = async (u_id) => {
  try {
    const sql = `SELECT application.idx, name, appDesc.appDesc, appImg.imgUrl
    FROM application 
    LEFT JOIN appDesc
    ON application.idx=appDesc.a_idx
    LEFT JOIN appImg
    ON application.idx=appImg.a_idx
    WHERE u_idx="${u_id}"`;
    const [result] = await pool.query(sql);
    return result;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

/**
 * received idx for param return application info
 * @param {string} idx
 */
const getAppInfo = async (idx) => {
  try {
    const sql = `SELECT name,APIkey,host,redirectURI,appDesc,imgUrl, usePoint, pointRouter, pointUseRouter 
                FROM application
                LEFT JOIN appDesc ON application.idx=appDesc.a_idx
                LEFT JOIN appImg ON application.idx=appImg.a_idx
                LEFT JOIN pointRouters ON application.idx=pointRouters.a_idx
                WHERE application.idx="${idx}"`;
    const [[result]] = await pool.query(sql);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * received req.body & req.file return boolean(update result)
 * @param {req.body} body
 * @param {req.file} file
 */
const updateApp = async (body, file) => {
  const {
    idx,
    name,
    desc,
    host,
    redirect,
    usePoint,
    pointRouter,
    pointUseRouter,
  } = body;

  try {
    const sql = `UPDATE application 
                LEFT JOIN appDesc
                ON application.idx=appDesc.a_idx
                SET name="${name}", appDesc="${desc}", host="${host}", redirectURI="${redirect}", usePoint="${
      usePoint === 'true' ? 1 : 0
    }"
                WHERE application.idx="${idx}"`;
    await pool.query(sql);

    if (usePoint === 'true') {
      const selectSql = `SELECT * FROM pointRouters WHERE a_idx="${idx}"`;
      const [[selectResult]] = await pool.query(selectSql);
      if (selectResult) {
        const updateSql = `UPDATE pointRouters SET pointRouter="${pointRouter}", pointUseRouter="${pointUseRouter}" WHERE a_idx="${idx}"`;
        await pool.query(updateSql);
      } else {
        const insertSql = `INSERT INTO pointRouters (a_idx,pointRouter,pointUseRouter) VALUES ("${idx}","${pointRouter}","${pointUseRouter}")`;
        await pool.query(insertSql);
      }
    } else {
      const delSql = `
      DELETE FROM pointRouters WHERE a_idx="${idx}"
      `;
      await pool.query(delSql);
    }
  } catch (error) {
    console.log(error);
    return false;
  }

  if (!file) return true;

  try {
    const result = await uploadS3(file);
    const sql = `UPDATE appImg SET imgUrl="${result.Location}" WHERE a_idx="${idx}"`;
    await pool.query(sql);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * received idx delete app information from DB and returns boolean
 * @param {string} idx
 */
const delApp = async (idx) => {
  try {
    const sql = `DELETE FROM application WHERE idx="${idx}"`;
    await pool.query(sql);
  } catch (error) {
    console.log(error);
    return false;
  }

  try {
    const sql = `DELETE FROM appDesc WHERE a_idx=${idx}`;
    await pool.query(sql);
  } catch (error) {
    console.log(error);
    return false;
  }

  try {
    const sql = `DELETE FROM appImg WHERE a_idx="${idx}"`;
    await pool.query(sql);
  } catch (error) {
    console.log(error);
    return false;
  }

  try {
    const sql = `DELETE FROM pointRouters WHERE a_idx="${idx}"`;
    await pool.query(sql);
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};

module.exports = { appList, getAppInfo, updateApp, delApp };
