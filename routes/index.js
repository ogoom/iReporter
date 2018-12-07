
const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
	
	res.redirect("/red-flag");
});

module.exports = router;