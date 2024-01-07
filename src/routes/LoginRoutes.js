const Login = require("../controllers/Login");
const express = require("express");
const router = express.Router()

router.post('/login', Login.login);

module.exports = router;