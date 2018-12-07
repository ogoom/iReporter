const router = require("express").Router();
const incidentController = require("../../src/controller/incidentController");

// router.get("/", (req, res) => {
// 	res.status(200).json({ message: "Connected!" });
// 	res.status(200).send({"message": "YAH! Congratulations! Your first endpoint is working"});
// });
router.get("/", incidentController.getAll);
router.get("/:id", incidentController.getOne);
router.post("/", incidentController.createRecord);
router.patch("/:id/location", incidentController.updateLocation);
router.patch("/:id/comment", incidentController.comment);
router.delete("/:id", incidentController.delete);

module.exports = router;