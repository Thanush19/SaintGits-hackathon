const express = require("express");

const adminLogin = require("../controllers/auth.js/admin/adminLogin.js");
const adminRegister = require("../controllers/auth.js/admin/adminRegister.js");

const customerLogin = require("../controllers/auth.js/customer/customerLogin.js");
const customerRegister = require("../controllers/auth.js/customer/customerRegister.js");

const farmerLogin = require("../controllers/auth.js/farmer/farmerLogin.js");
const farmerRegister = require("../controllers/auth.js/farmer/farmerRegister.js");

const traderLogin = require("../controllers/auth.js/trader/traderLogin.js");
const traderRegister = require("../controllers/auth.js/trader/traderRegister.js");

const wholesaleLogin = require("../controllers/auth.js/wholesale/wholesaleLogin.js");
const wholesaleRegister = require("../controllers/auth.js/wholesale/wholesaleRegister.js");


const app = express.Router();

// admin login and register
app.post('/admin/login', adminLogin);
app.post('/admin/register', adminRegister);

// customer login and register
app.post('/customer/login', customerLogin);
app.post('/customer/register', customerRegister);

//farmers login and register
app.post('/farmer/login', farmerLogin);
app.post('/farmer/register', farmerRegister);

//traders login and register
app.post('/trader/login', traderLogin);
app.post('/trader/register', traderRegister);

//wholesale login and register
app.post('/wholesale/login', wholesaleLogin);
app.post('/wholesale/register', wholesaleRegister);


module.exports = app;