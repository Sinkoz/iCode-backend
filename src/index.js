require("dotenv").config();

const express = require("express");
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const config = require("../config/config");
const session = require("express-session");

const sess = {
	secret: "LoxodontaElephasMammuthusPalaeoloxodonPrimelephas",
	cookie: {},
	resave: false,
	saveUninitialized: false
};

var strategy = new Auth0Strategy(
	{
		domain: config.AUTH0_DOMAIN,
		clientID: config.AUTH0_CLIENT_ID,
		clientSecret: config.AUTH0_SECRET,
		callbackURL: "http://localhost:8080/callback",
		state: false
	},
	function(accessToken, refreshToken, extraParams, profile, done) {
		console.log("accessToken");
		console.log(accessToken);
		console.log("profile");
		console.log(profile);
		console.log("refreshToken");
		console.log(refreshToken);
		console.log("extra");
		console.log(extraParams);
		console.log("done");
		console.log(done);
		// accessToken is the token to call Auth0 API (not needed in the most cases)
		// extraParams.id_token has the JSON Web Token
		// profile has all the information from the user
		return done(null, profile);
	}
);

passport.use(strategy);
//console.log(passport);

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

// Initialize Express app
const app = express();

// CORS (CURRENTLY ALLOWS ALL ORIGINS)
app.use(cors());

// Compress all responses
app.use(compression());

// Initialize host & port
const port = process.env.PORT || 8080;

// Configure app to use bodyParser to read request bodies
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

// ----- ROUTING TABLE STARTS -----
app.use("/", routes);
// ----- ROUTING TABLE ENDS -----

// Shows that server is listening
const server = app.listen(port, () => {
	console.log(`API server listening at port ${port}`);
});

module.exports = server;
