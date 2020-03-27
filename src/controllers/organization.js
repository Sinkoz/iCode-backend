const firebaseDB = require("../../firebase/firebase");
const firebase = require("firebase-admin");

class OrganizationController {
	static getAll(req, res) {
		let result = [];
		let citiesRef = firebaseDB.collection("organizations");
		let allOrganizations = citiesRef
			.get()
			.then(snapshot => {
				snapshot.forEach(doc => {
					result.push(doc.data());
				});
				return res.status(200).json({
					result
				});
			})
			.catch(err => {
				console.log("Error getting organizations", err);
				return res.status(400).json({
					message: "Something went wrong",
					err
				});
			});
	}
}

module.exports = OrganizationController;
