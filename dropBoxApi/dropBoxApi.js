class dropBoxAPI {
	static addEntry(token, record) {
		const dropboxApi = require("dropbox-v2-api");
		const fs = require("fs");

		var name = record.name;
		var location = record.location;
		var email = record.email;
		var phone = record.phone;
		var date = record.date;
		var time = record.time;
		var submissionId = record.submissionId;
		var entry =
			submissionId +
			"," +
			name +
			"," +
			location +
			"," +
			email +
			"," +
			phone +
			"," +
			date +
			"," +
			time +
			"\n";

		const dropbox = dropboxApi.authenticate({
			token: token
		});

		dropbox(
			{
				resource: "files/get_metadata",
				parameters: {
					path: "/records.csv",
					include_media_info: false
				}
			},
			(err, result, response) => {
				if (err) {
					dropbox(
						{
							resource: "files/upload",
							parameters: {
								path: "/records.csv"
							}
							//readStream: fs.createReadStream('recordsTemplate.csv')
						},
						(err, result, response) => {
							writeToFile();
						}
					);
				} else {
					writeToFile();
				}
			}
		);

		function writeToFile() {
			var stream = fs.createWriteStream("download.csv", {flags: "a"});

			dropbox(
				{
					resource: "files/download",
					parameters: {
						path: "/records.csv"
					}
				},
				(err, result, response) => {
					if (err) {
						return;
					}
				}
			).pipe(stream);

			stream.write(entry);
			stream.on("finish", () => {
				//var uploadStream = fs.createWriteStream('upload.csv')
				var readStream = fs.createReadStream("download.csv");
				//readStream.pipe(uploadStream);
				dropbox(
					{
						resource: "files/upload",
						parameters: {
							path: "/records.csv",
							mode: "overwrite"
						},
						readStream: readStream
					},
					(err, result, response) => {
						if (result) {
							fs.unlink("download.csv", () => {
								console.log("file deleted");
							});
						}
					}
				);
			});
		}
	}
}

module.exports = dropBoxAPI;
