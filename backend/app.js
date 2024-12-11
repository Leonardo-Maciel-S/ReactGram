require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./routes/routes");

const port = process.env.PORT;

const app = express();

//config JSOM and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//Db Conection
require("./config/db.js");

//Routes
app.use(router);

app.listen(port, () => {
	console.log(`App rodando na porta http://localhost:${port}`);
});
