const { z } = require("zod");

//Create validation

const contectvalidation = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars." })
    .max(100, { message: "Name must be less then 100" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(7, { message: "Email must be at lest of 7 chars." })
    .max(100, { message: "Email must be less then 100" }),
  message: z
    .string({ required_error: "message is required" })
    .trim()
    .min(6, { message: "message must be at lest of 6 chars." })
    .max(100, { message: "message must be less then 100" }),
});

module.exports = { contectvalidation };
