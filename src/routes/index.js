const Router = require("express").Router;
const ping = require("./ping");
const recordStore = require("./recordStoring");

const router = Router();
const loggerFormat =
	'[:date[iso]] ":method :url HTTP/:http-version" :status ":user-agent"';

// ----- IMPLEMENT BETTER HTTP LOGGING WITH MORGAN -----
if (process.env.NODE_ENV !== "production") {
	const morgan = require("morgan");
	router.use(
		morgan(loggerFormat, {
			skip: (req, res) => {
				return res.statusCode < 400;
			},
			stream: process.stdout
		})
	);

	router.use(
		morgan(loggerFormat, {
			skip: (req, res) => {
				return res.statusCode >= 400;
			},
			stream: process.stderr
		})
	);
}

// ----- MORGAN ENDS -----

// ----- ROUTING TABLE STARTS -----
router.use(ping);
router.use(recordStore);
// ----- ROUTING TABLE ENDS -----

module.exports = router;
