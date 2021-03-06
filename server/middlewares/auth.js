const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers); // token
  try {
    const firebaseAdmin = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("FIREBASE ADMIN IN AUTHCHECK", firebaseAdmin);
    req.admin = firebaseAdmin;
    next();
  } catch (err) {
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};
