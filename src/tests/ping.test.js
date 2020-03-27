const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../");

chai.use(chaiHttp);
chai.should();

// Test suite for PingController
describe("PingController", function() {
	describe("GET /api/ping", function() {
		it("Should receive back pong", function(done) {
			chai
				.request(server)
				.get("/api/ping")
				.end((err, res) => {
					if (err) console.log(err);
					res.should.have.status(200);
					res.body.should.be.a("object");
					done();
				});
		});
	});
});
