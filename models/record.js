var Records = {
	name: "records",
	builder: function(privateClient, publicClient) {
		privateClient.declareType("record", {
			type: "object",
			properties: {
				id: {
					type: "string"
				},
				name: {
					type: "string"
				},
				email: {
					type: "string"
				},
				number: {
					type: "string"
				},
				location: {
					type: "string"
				}
			}
		});

		return {
			exports: {
				add: function(record) {
					console.log("adding");
					var path = "storage/" + record.id;
					return privateClient
						.storeObject("record", path, record)
						.then(function() {
							return record; // return bookmark with added ID property
						});
				}
			}
		};
	}
};

module.exports = Records;
