// CONTROLLER TO TEST THAT ROUTING IS WORKING
const axios = require("axios");
const dropBoxApi = require("../../dropBoxApi/dropBoxApi");

var moment = require("moment-timezone");

class RecordStoreController {
	static store(req, res) {
		var body = req.body;

		var location = body["location"];
		var email = body["email"];
		var name = body["name"];
		var phone = body["phone"];

		var datetime = moment().tz("Asia/Singapore");

		var date = datetime.format("DD-MM-YYYY");

		var time = datetime.format("HH:mm");

		var record = {
			name: name,
			location: location,
			email: email,
			phone: phone,
			date: date,
			time: time
		};

		dropBoxApi.addEntry(process.env.DROPBOXAPIKEY, record);

		/*
		var url =
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
			process.env.FIREBASE_API_KEY;

		axios
			.post(url, {
				email: process.env.FIREBASE_EMAIL,
				password: process.env.FIREBASE_PASSWORD,
				returnSecureToken: true
			})
			.then(function(response) {
				var validToken = response.data.idToken;
				axios.post(
					"https://firestore.googleapis.com/v1/projects/storage-ce335/databases/(default)/documents/record/",
					{
						fields: {
							location: {
								stringValue: location
							},
							email: {
								stringValue: email
							},
							date: {
								stringValue: date
							},
							time: {
								stringValue: time
							}
						}
					},
					{
						headers: {
							Authorization: "Bearer " + validToken
						},
						params: {
							documentId: nameId
						}
					}
				);
			})
			.catch(function(error) {});
			*/

		return res.status(200).json({
			message: "Successfully Stored"
		});
	}
}

module.exports = RecordStoreController;
