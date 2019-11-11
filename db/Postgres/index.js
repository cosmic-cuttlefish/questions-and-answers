const Pool = require("pg").Pool;
const config = require("../../config.json");

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.db,
  port: config.port
});

module.exports = pool;
