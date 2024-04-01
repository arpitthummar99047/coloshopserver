const express = require("express");
const router = express.Router();
const authContoller = require("../controller/auth_contoller");

const {
  signUpvalidation,
  loginValidation,
} = require("../validators/auth_validator");
const validate = require("../middlewere/validate_middlewere");

const authMiddlewere = require("../middlewere/auth_middlwere");
// urls

router.route("/").get(authContoller.home);
router
  .route("/register")
  .post(validate(signUpvalidation), authContoller.register);
router.route("/login").post(validate(loginValidation), authContoller.login);
router.route("/user").get(authMiddlewere, authContoller.user);
module.exports = router;
