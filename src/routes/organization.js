const Router = require("express").Router;
const {Organization} = require("../controllers");

const router = Router();

// GET '/api/ping' ENDPOINT
router.get("/organization/all", Organization.getAll);

module.exports = router;
