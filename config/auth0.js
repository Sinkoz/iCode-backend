const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const config = require("./config");

var strategy = new Auth0Strategy(
	{
		domain: config.AUTH0_DOMAIN,
		clientID: config.AUTH0_CLIENT_ID,
		clientSecret: config.AUTH0_SECRET,
		callbackURL: "localhost:8080/callback"
	},
	function(accessToken, refreshToken, extraParams, profile, done) {
		// accessToken is the token to call Auth0 API (not needed in the most cases)
		// extraParams.id_token has the JSON Web Token
		// profile has all the information from the user
		return done(null, profile);
	}
);

passport.use(strategy);
passport.initialize();

module.exports = passport;
