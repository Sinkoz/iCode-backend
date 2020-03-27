const RemoteStorage = require("remotestoragejs");
const Records = require("../models/record");
const Bookmarks = require("../models/bookmark");

const remoteStorage = new RemoteStorage();
remoteStorage.setApiKeys({dropbox: "qsl1okjpkamqwx8"});
//remoteStorage.addModule(Records);
//remoteStorage.addModule(Bookmarks);
remoteStorage.access.claim("storage", "rw");

module.exports = remoteStorage;
