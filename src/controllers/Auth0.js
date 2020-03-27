const passport = require("passport");

class Auth0Controller {
	static loginCallback(req, res) {
		console.log(req);
		console.log(res);
		res.redirect("http://localhost:8080/");
	}

	static callback(req, res, next) {
		passport.authenticate("auth0", (err, user, info) => {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.redirect("/login");
			}
			req.logIn(user, err => {
				if (err) {
					return next(err);
				}
				const returnTo = req.session.returnTo;
				delete req.session.returnTo;
				res.redirect(returnTo || "http://google.com");
			});
		})(req, res, next);
	}

	static logout(req, res) {
		req.logOut();

		res.redirect("http://localhost:8080/login");
	}
}

module.exports = Auth0Controller;
