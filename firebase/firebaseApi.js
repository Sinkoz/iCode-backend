var admin = require("firebase-admin");

var serviceAccountDec = Buffer.from(
	process.env.FIREBASE_SVC,
	"base64"
).toString("ascii");
var serviceAccount = JSON.parse(serviceAccountDec);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

var firebaseDB = admin.firestore();

module.exports = firebaseDB;
