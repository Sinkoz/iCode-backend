const Router = require("express").Router;
const {Ping} = require("../controllers");

const router = Router();

// GET '/api/ping' ENDPOINT
router.get("/ping", Ping.ping);

module.exports = router;
