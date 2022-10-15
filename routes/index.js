var express = require("express");
var router = express.Router();

const studentController = require("../controllers/student.controller");

/* GET home page. */
router.get("/", studentController.getAll);
router.get("/create", studentController.createOne);
router.post("/create", studentController.createOne);
router.get("/update/:student_id", studentController.updateOne);
router.post("/update/:student_id", studentController.updateOne);
router.get("/delete/:student_id", studentController.deleteOne);

module.exports = router;
