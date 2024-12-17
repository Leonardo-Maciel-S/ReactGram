const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
	try {
		const dbConn = await mongoose.connect(
			`mongodb+srv://${dbUser}:${dbPassword}@reactgram.gdh6n.mongodb.net/?retryWrites=true&w=majority&appName=reactGram`,
		);

		console.log("Conectou ao banco");

		return dbConn;
	} catch (error) {
		console.log(error);
	}
};

conn();

module.exports = conn;
