const { Pool } = require("pg");

const connectionString = "";

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
