const { Pool } = require("pg");

const connectionString = "postgresql://devaharishm:Rzd2Na0lxKeE@ep-lively-water-a1xepnzv.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

const pool = new Pool({
  connectionString,
});

async function checkDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log("conected to db");
    client.release();
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}
checkDatabaseConnection();

module.exports = pool;
