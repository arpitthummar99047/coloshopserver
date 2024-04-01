require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth_router");
const contectRoute = require("./router/contect_router");
const connectDb = require("./utility/db");
const errorMiddlewere = require("./middlewere/error_middlewere");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contectRoute);
app.use(errorMiddlewere);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server run at port : ${PORT}`);
  });
});
