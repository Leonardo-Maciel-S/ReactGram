const express = require("express");
const router = express();

router.use("/api/user", require("./UserRoutes"));

router.get("/", (req, res) => {
	res.send("bótão");
});

module.exports = router;
