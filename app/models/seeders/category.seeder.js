const { default: mongoose, Schema } = require("mongoose");
const categoryModel = require("../category.model");
const { db_url } = require("../../../configs/db.config");

let data = [
	{
		title: "Opinion",
		creator: "645fc7c1d7c51530643212e0",
	},
	{
		title: "Sports",
		creator: "645fc48cef1e9e5ad5a12089",
	},
	{
		title: "Business",
		creator: "645fc48cef1e9e5ad5a12089",
	},
	{
		title: "Entertainment",
		creator: "645fc48cef1e9e5ad5a12089",
	},
];

module.exports = async () => {
	console.log("\n");
	console.log("user seeding");
	await categoryModel.deleteMany({});
	let response = await categoryModel.insertMany(data);
}
