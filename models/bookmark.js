var Bookmarks = {
	name: "bookmarks",
	builder: function(privateClient, publicClient) {
		return {
			exports: {
				addBookmark: function() {
					console.log("adding bookmark");
				}
			}
		};
	}
};
module.exports = Bookmarks;
