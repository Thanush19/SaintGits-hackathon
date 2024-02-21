const jwt = require("jsonwebtoken");
const pool = require("../../../db/db.js")

const traderLogin = async (req, res) => {
    
    try {

        const { aadhaar_number, phone_number } = req.body;

        const client = await pool.connect();

        const search_query = {
            text : "SELECT * FROM traders WHERE aadhaar_number = $1",
            values : [aadhaar_number]
        };

        const result = await client.query(search_query);

        if(result.rows.length === 0) {
            res.status(404).json({message : "User not found. Please register"});
        }
        else {

            const user = result.rows[0];

            //check if the phone number is matching or not

            if(phone_number === user.phone_number) {
                //generate the token
                
                const token = jwt.sign({ category : "trader", user : user.id }, "SECRET_KEY");

                res.status(200).json({token, user, category : "trader"});

            }
            else {
                res.status(401).json({message : "Invalid credentials"});
            }
        }
        
    } catch (err) {
        res.status(500).json({message : err.message});
    }

};

module.exports = traderLogin;