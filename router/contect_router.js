const express = require("express");
const router = express.Router();
const contectForm = require("../controller/contect_controller");
const { contectvalidation } = require("../validators/contect_validator");
const validate = require("../middlewere/validate_middlewere");

// urls

router.route("/contect").post(validate(contectvalidation), contectForm);

module.exports = router;
