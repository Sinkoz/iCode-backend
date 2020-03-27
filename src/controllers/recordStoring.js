// CONTROLLER TO TEST THAT ROUTING IS WORKING
const firebaseDB = require("../../firebase/firebase");
const firebase = require("firebase-admin");
var moment = require("moment-timezone");

class RecordStoreController {
	static store(req, res) {
		var body = req.body;

		var location = body["location"];
		var email = body["email"];

		var datetime = moment().tz("Asia/Singapore");

		var date = datetime.format("DD-MM-YYYY");

		var time = datetime.format("HH:mm");

		var collection = firebaseDB.collection("record");
		var docRef = collection.doc(date);

		docRef.get().then(function(snapshot) {
			if (snapshot.exists) {
				docRef.update({
					records: firebase.firestore.FieldValue.arrayUnion({
						location: location,
						email: email,
						time: time
					})
				});
			} else {
				docRef.set({
					records: [
						{
							location: location,
							email: email,
							time: time
						}
					]
				});
			}
		});

		return res.status(200).json({
			message: "Successfully Stored"
		});
	}
}

module.exports = RecordStoreController;
