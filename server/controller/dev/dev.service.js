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
    const sql = `SELECT name,APIkey,host,redirectURI,appDesc,imgUrl FROM application
                LEFT JOIN appDesc ON application.idx=appDesc.a_idx
                LEFT JOIN appImg ON application.idx=appImg.a_idx
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
  const { idx, name, desc, host, redirect } = body;
  try {
    const sql = `UPDATE application 
                LEFT JOIN appDesc
                ON application.idx=appDesc.a_idx
                SET name="${name}", appDesc="${desc}", host="${host}", redirectURI="${redirect}"
                WHERE application.idx="${idx}"`;
    await pool.query(sql);
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

  return true;
};

module.exports = { appList, getAppInfo, updateApp, delApp };
