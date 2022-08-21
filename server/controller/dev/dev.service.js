const { pool } = require('../../db.js');

const appList = async (u_id) => {
  try {
    const sql = `SELECT application.idx, name, appDesc.appDesc, appImg.imgUrl
    FROM application 
    JOIN appDesc
    ON application.idx=appDesc.a_idx
    JOIN appImg
    ON application.idx=appImg.a_idx
    WHERE u_idx="${u_id}"`;
    const [result] = await pool.query(sql);
    return result;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

module.exports = { appList };
