const { body } = require("express-validator");

const userCreateValidation = () => {
	return [
		body("name")
			.isString()
			.withMessage("Nome é obrigatório.")
			.isLength({ min: 3 })
			.withMessage("O nome precisa ter no mínimo 3 caracteres"),

		body("email")
			.isString()
			.withMessage("Email é obrigatório")
			.isEmail()
			.withMessage("Email é inválido."),

		body("password")
			.isString()
			.withMessage("Senha é obrigatório")
			.isLength({ min: 5 })
			.withMessage("A senha precisa ter no mínimo 5 caracteres."),

		body("confirmPassword")
			.isString()
			.withMessage("A confirmação de senha é obrigatório")
			.custom((value, { req }) => {
				console.log(typeof value);
				console.log(typeof req.body.password);
				console.log(value === req.body.password);
				if (value !== req.body.password) {
					throw new Error("As senhas não são iguais.");
				}

				return true;
			}),
	];
};

module.exports = { userCreateValidation };
