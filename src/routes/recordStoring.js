const Router = require("express").Router;
const {recordStore} = require("../controllers");

const router = Router();

// GET '/api/ping' ENDPOINT
router.post("/store", recordStore.store);

module.exports = router;
