// CONTROLLER TO TEST THAT ROUTING IS WORKING
const axios = require("axios");
const firebase = require("firebase");
class PingController {
	static ping(req, res) {
		/*
		axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9M3UQ1lkZ-MDv5ZeK3NjGIvmVZ_SLiKE",
		{
			"email":"xinchen.zhu94@gmail.com",
			"password":"@Test123",
			"returnSecureToken":true
		})
		.then(function(response){
			console.log(response);
		})
		.catch(function(error){

		})
		*/

		var app = firebase.initializeApp({
			apiKey: "AIzaSyB9M3UQ1lkZ-MDv5ZeK3NjGIvmVZ_SLiKE",
			projectId: "storage-ce335"
		});
		var db = app.firestore();

		db.collections("record");

		return res.status(200).json({
			message: "PONG"
		});
	}
}

module.exports = PingController;
