const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../../../db/db.js")

const adminLogin = async (req, res) => {
    
    try {

        const { username, password } = req.body;

        const client = await pool.connect();

        const search_query = {
            text : "SELECT * FROM admin WHERE username = $1",
            values : [username]
        };

        const result = await client.query(search_query);

        if(result.rows.length === 0) {
            res.status(404).json({message : "User not found. Please register"});
        }
        else {

            const user = result.rows[0];

            //check the passwords are matching or not

            const passwordMatch = await bcrypt.compare(password, user.password);

            if(passwordMatch) {
                //generate the token
                
                const token = jwt.sign({ category : "admin", user : user.id }, "SECRET_KEY");

                delete user.password;

                res.status(200).json({message : {token, user, category : "admin"}});

            }
            else {
                res.status(401).json({message : "Invalid credentials"});
            }


        }
        
    } catch (err) {
        res.status(500).json({message : err.message});
    }

};

module.exports = adminLogin;