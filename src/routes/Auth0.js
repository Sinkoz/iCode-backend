const Router = require("express").Router;
const {Auth0} = require("../controllers");
const passport = require("passport");

const router = Router();

// POST '/api/service-locations' ENDPOINT
router.get(
	"/login",
	passport.authenticate("auth0", {scope: "openid email profile"}),
	Auth0.loginCallback
);
router.get("/callback", Auth0.callback);
router.get("/logout", Auth0.logout);

module.exports = router;
