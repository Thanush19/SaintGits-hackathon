const { Pool } = require("pg");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

// Create an Express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
