const { default: axios } = require('axios');
const { pool } = require('../../db');

const getPoint = async (userCode, clientId) => {
  try {
    const sql = `SELECT connected.a_idx, application.name, pointRouter
                FROM connected
                LEFT JOIN user
                ON connected.u_idx=user.idx
                LEFT JOIN application
                ON connected.a_idx=application.idx
                LEFT JOIN pointRouters
                ON connected.a_idx=pointRouters.a_idx
                WHERE user.userCode="${userCode}" AND application.usePoint="1" AND NOT APIKey="${clientId}"`;

    const [result] = await pool.query(sql);
    const routers = result.map((v) => v.pointRouter);
    const points = [];
    for await (const router of routers) {
      const response = await axios.post(router, { userCode });
      points.push(response.data.pt);
    }
    points.forEach((point, i) => {
      result[i].pt = point;
      delete result[i].pointRouter;
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { getPoint };
