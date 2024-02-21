const pool = require("../../../db/db.js");


const farmerRegister = async (req, res) => {
    
    try {

        const { aadhaar_number, phone_number, address } = req.body;

        const client = await pool.connect();

        const search_query = {
            text : "SELECT * FROM farmers WHERE aadhaar_number = $1",
            values : [aadhaar_number]
        };

        const result = await client.query(search_query);

        if(result.rows.length === 0) {

            const query = {
                text : "INSERT INTO farmers ( aadhaar_number, phone_number, address ) VALUES ($1, $2, $3)",
                values : [aadhaar_number, phone_number, address]
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

module.exports = farmerRegister;