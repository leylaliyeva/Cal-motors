
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbserviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://car-project-2ba2d.firebaseio.com"
});

module.exports=admin;