let express = require('express');
let router = express.Router();
const { getAllUsers, getSingleUser, updateUser, deleteUser } = require('../DB/Queries/Users')
const db = require("../DB/Queries/AuthQ");
const passport = require("../Auth/Local");
const { loginRequired } = require("../Auth/Helpers");

router.get('/', getAllUsers)
router.get('/:id', getSingleUser)

router.patch('/:id', updateUser )

router.delete('/:id', deleteUser)

router.post("/new", db.createUser);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.get("/isLoggedIn", db.isLoggedIn);
router.post("/logout", loginRequired, db.logoutUser);




module.exports = router; 