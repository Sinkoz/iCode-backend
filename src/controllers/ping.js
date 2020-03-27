// CONTROLLER TO TEST THAT ROUTING IS WORKING
const remoteStorage = require("../../remoteStorage/remoteStorage");
class PingController {
	static ping(req, res) {
		var client = remoteStorage.scope("/contact-storage/");
		client.getListing("").then(listing => console.log(listing));

		// Write some text to "foo/bar.txt"
		const content = "The most simple things can bring the most happiness.";
		client
			.storeFile("text/plain", "bar.txt", content)
			.then(() => console.log("data has been saved"));

		remoteStorage.dropbox.connect("/contact-storage");
		remoteStorage.dropbox.get("/contact-storage", function(req, res) {
			console.log(req);
			console.log(res);
		});

		/*	  
		remoteStorage.records.add({
			id : "1",
			name: "Xinchen",
			email: "test@gmail.com",
			number: "12345678",
			location: "Home"
		})*/
		return res.status(200).json({
			message: "PONG"
		});
	}
}

module.exports = PingController;
