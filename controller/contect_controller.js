const Contact = require("../models/contect_modals");

const contectForm = async (req, res, next) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    // return res.status(200).json({ message: "message not send" });
    next(error);
  }
};

module.exports = contectForm;
