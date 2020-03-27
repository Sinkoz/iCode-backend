const RemoteStorage = require("remotestoragejs");
const Records = require("../models/record");
const Bookmarks = require("../models/bookmark");

const remoteStorage = new RemoteStorage();
remoteStorage.setApiKeys({dropbox: {appKey: "qsl1okjpkamqwx8"}});
//const client = remoteStorage.dropbox;
remoteStorage.on("connected", () => {
	console.log(remoteStorage.remote.userAddress);
});

//remoteStorage.addModule(Records);
//remoteStorage.addModule(Bookmarks);
remoteStorage.access.claim("contact-storage", "rw");

const client = remoteStorage.scope("/contact-storage/");
client
	.storeFile("text/plain", "bar.txt", "HELLO")
	.then(() => console.log("data has been saved"));

remoteStorage.dropbox.get("/", function(res) {
	console.log(res);
});

module.exports = remoteStorage;
