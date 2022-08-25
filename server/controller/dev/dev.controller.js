const uuid = require('uuid');

const { pool } = require('../../db.js');
const service = require('./dev.service.js');

const addApp = async (req, res) => {
  const { u_idx, name, desc, host, redirect } = req.body;
  const APIkey = uuid.v4().split('-').join('');
  try {
    const sql = `INSERT INTO application (name, u_idx, APIkey, host, redirectURI) 
    VALUES("${name}","${u_idx}","${APIkey}","${host}","${redirect}")`;
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

const appList = async (req, res) => {
  const { _id: u_id } = req.body;
  const result = await service.appList(u_id);
  if (!result) {
    res.sendStatus(500).send(false);
    return;
  }

  res.json(result);
};

const appInfo = async (req, res) => {
  const { idx } = req.body;
  const appInfo = await service.getAppInfo(idx);
  if (!appInfo) {
    res.sendStatus(500).send(false);
    return;
  }

  res.json(appInfo);
};

const updateApp = async (req, res) => {
  const result = await service.updateApp(req.body, req.file);
  if (result) {
    res.send(true);
  } else {
    res.sendStatus(500).send(false);
  }
};

const delApp = async (req, res) => {
  const { idx } = req.body;

  const result = await service.delApp(idx);
  if (result) {
    res.send(true);
  } else {
    res.sendStatus(500).send(false);
  }
};

module.exports = { addApp, appList, appInfo, updateApp, delApp };
