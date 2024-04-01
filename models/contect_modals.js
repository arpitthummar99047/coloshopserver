const { Schema, model } = require("mongoose");

const contectSchema = new Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  message: {
    type: String,
    require: true,
  },
});

//modeals and collections

const Contact = new model("Contect", contectSchema);
module.exports = Contact;
