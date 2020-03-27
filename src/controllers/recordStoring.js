// CONTROLLER TO TEST THAT ROUTING IS WORKING
const firebaseDB = require("../../firebase/firebase");

class RecordStoreController {
	static store(req, res) {
		var body = req.body;

		var location = body["location"];
		var email = body["email"];

		var date = new Date().toLocaleDateString;

		var docRef = firebaseDB.collection("record").doc("test");
		docRef.set({
			location: location,
			email: email
		});

		return res.status(200).json({
			message: "Successfully Stored"
		});
	}
}

module.exports = RecordStoreController;
