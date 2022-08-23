const { pool } = require('../../db.js');

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
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { appList, getAppInfo };
