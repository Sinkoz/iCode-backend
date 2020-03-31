// CONTROLLER TO TEST THAT ROUTING IS WORKING
class PingController {
	static ping(req, res) {
		return res.status(200).json({
			message: "Successfully Stored"
		});
	}
}

module.exports = PingController;
