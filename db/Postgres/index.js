const Pool = require("pg").Pool;
const config = require("../../config.json");

if (process.env.NODE_ENV === "docker") {
  config.env = config.docker;
} else if (process.env.NODE_ENV === "production") {
  config.env = config.production;
} else {
  config.env = config.development;
}
const pool = new Pool({
  user: config.env.PGUSER,
  host: config.env.PGHOST,
  database: config.env.PGDATABASE,
  port: config.env.PGPORT
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
