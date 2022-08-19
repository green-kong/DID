const { pool } = require('../../db.js');
const uuid = require('uuid');
const addApp = async (req, res) => {
  const { name, desc, host, redirect } = req.body;
  const APIkey = uuid.v4().split('-').join('');
  try {
    const sql = `INSERT INTO application (name, u_idx, APIkey, host, redirectURI) 
    VALUES("${name}",1,"${APIkey}","${host}","${redirect}")`;
    const a = await pool.query(sql);
    if (desc) {
      const descSql = `INSERT INTO appDesc (a_idx,appDesc) 
                      VALUES("${a[0].insertId}", "${desc}")`;
      await pool.query(descSql);
    }
    if (req.file) {
      const imgSql = `INSERT INTO appImg (a_idx, imgUrl) 
      VALUES("${a[0].insertId}", "${req.file.filename}")`;
      await pool.query(imgSql);
    }
    res.json({ idx: a[0].insertId });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = { addApp };
