const { z } = require("zod");

const loginValidation = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "User not found" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Enter valide password" }),
});

//Create validation

const signUpvalidation = loginValidation.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "UserName must be at lest of 3 chars." })
    .max(50, { message: "UserName must be less then 50" }),

  phone: z
    .string({ required_error: "mobile number is required" })
    .trim()
    .min(10, { message: "Phone Number must be 10 number" })
    .max(10, { message: "Phone Number must be 10 number" }),
});

module.exports = { signUpvalidation, loginValidation };
