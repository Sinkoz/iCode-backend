var admin = require("firebase-admin");

var firebaseConfig = {
	type: "service_account",
	project_id: "storage-ce335",
	private_key_id: process.env.FIREBASE_PKEY_ID,
	private_key: process.env.FIREBASE_PKEY,
	client_email: process.env.FIREBASE_CLIENT_EMAIL,
	client_id: process.env.FIREBASE_CLIENT_ID,
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1cy6f%40storage-ce335.iam.gserviceaccount.com"
};

admin.initializeApp({
	credential: admin.credential.cert(firebaseConfig)
});

var firebaseDB = admin.firestore();

module.exports = firebaseDB;
