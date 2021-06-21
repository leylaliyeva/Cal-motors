const Admin = require("../models/admin");

exports.createOrUpdateAdmin = async (req, res) => {
  const { name, picture, email } = req.admin;

  const admin = await Admin.findOneAndUpdate(
    { email },
    { name: email.split("@")[0], picture },
    { new: true }
  );
  if (admin) {
    console.log("ADMIN UPDATED", admin);
    res.json(admin);
  } else {
    const newAdmin = await new Admin({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    console.log("ADMIN CREATED", newAdmin);
    res.json(newAdmin);
  }
};

exports.currentAdmin = async (req, res) => {
  Admin.findOne({ email: req.admin.email }).exec((err, admin) => {
    if (err) throw new Error(err);
    res.json(admin);
  });
};
