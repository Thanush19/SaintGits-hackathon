const pool = require("../../../db/db.js");
const bcrypt = require("bcrypt");


const adminRegister = async (req, res) => {
    
    try {

        const { username, password } = req.body;

        const client = await pool.connect();

        const search_query = {
            text : "SELECT * FROM admin WHERE username = $1",
            values : [username]
        };

        const result = await client.query(search_query);

        if(result.rows.length === 0) {

            const hashedPassword = await bcrypt.hash(password, 10);

            const query = {
                text : "INSERT INTO admin (username, password) VALUES ($1, $2)",
                values : [username, hashedPassword]
            };

            await client.query(query);

            res.status(200).json({message : "User registered successfully."});

        } 
        else {
            res.status(409).json({message : "User already found. Please Login"});
        }
        
    } catch (err) {
        res.status(500).json({message : err.message});
    }

};

module.exports = adminRegister;