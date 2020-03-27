// CONTROLLER TO TEST THAT ROUTING IS WORKING
const firebaseDB = require("../../firebase/firebase");
var moment = require("moment-timezone");

class RecordStoreController {
	static store(req, res) {
		var body = req.body;

		var location = body["location"];
		var email = body["email"];

		var datetime = moment().tz("Asia/Singapore");

		var date = datetime.format("DD-MM-YYYY");

		var time = datetime.format("HH:mm");

		var docRef = firebaseDB.collection("record").doc(date);
		docRef.set({
			location: location,
			email: email,
			time: time
		});

		return res.status(200).json({
			message: "Successfully Stored"
		});
	}
}

module.exports = RecordStoreController;
