const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../configs/db.config");
const userModel = require("../user.model");

let data = [
	{
		username: "admin",
		email: "admin@gmail.com",
		password: "$2b$13$pfkXQsGtSGLu/oPrU5cNuebG6o6zUK7tX70N.ACkakfJ9niKe3eXy",
	},
	{
		username: "user",
		email: "user@gmail.com",
		password: "$2b$13$pfkXQsGtSGLu/oPrU5cNuebG6o6zUK7tX70N.ACkakfJ9niKe3eXy",
	},
];

module.exports = () => mongoose.connect(db_url).then(async () => {
	console.log("\n");
	console.log("user seeding");

	await userModel.deleteMany({});
	let response = await userModel.insertMany(data);

    console.log("user seeding complete");

	console.log("\n");
});
