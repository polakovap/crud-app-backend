const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {getUsers, createUser} = require('../controllers/user.controller.js');
const {loginUser} = require('../controllers/login.controller.js');
const {registerUser} = require('../controllers/registration.controller.js')

router.get('/', getUsers);

router.post("/", createUser);

router.post("/login", loginUser)

router.post("/register", registerUser)

module.exports = router;