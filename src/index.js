require("dotenv").config();

const express = require("express");
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes");

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

// ----- ROUTING TABLE STARTS -----
app.use("/", routes);
// ----- ROUTING TABLE ENDS -----

// Shows that server is listening
const server = app.listen(port, () => {
	console.log(`API server listening at port ${port}`);
});

module.exports = server;
