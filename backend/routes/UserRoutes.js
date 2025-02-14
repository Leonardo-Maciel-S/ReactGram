const express = require("express");
const router = express.Router();

//Controller
const {
	register,
	login,
	getCurrentUser,
	update,
	getUserById,
} = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const {
	userCreateValidation,
	loginValidation,
	userUpdateValidation,
} = require("../middlewares/userValidations");
const { imageUpload } = require("../middlewares/imageUpload");
//Routes

router.post("/register", userCreateValidation(), validate, register);
router.get("/profile", authGuard, getCurrentUser);
router.post("/login", loginValidation(), validate, login);

router.put(
	"/",
	authGuard,
	userUpdateValidation(),
	validate,
	imageUpload.single("profileImage"),
	update,
);

router.get("/:id", getUserById);

module.exports = router;
