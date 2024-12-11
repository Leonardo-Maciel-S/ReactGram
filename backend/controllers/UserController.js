const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

//gerando token de usuário
const generateToken = (id) => {
	return jwt.sign({ id }, jwtSecret, {
		expiresIn: "7d",
	});
};

//register user and sign in
const register = async (req, res) => {
	res.send("registro");
};

module.exports = {
	register,
};
