const translatorModel = require("../translator.model");

let data = [
	{
		name: "Mulk Raj Anand",
		creator: "645bc6f892c7867fa8949987",
	},
	{
		name: "Khushwant Singh",
		creator: "645bc6f892c7867fa89495a9",
	},
	{
		name: "Aravind",
		creator: "645bc6f892c7867fa89495a9",
	},
	{
		name: "Vikram",
		creator: "645bc6f892c7867fa89495a9",
	},
	{
		name: "Kiran",
		creator: "645bc6f892c7867fa89495a9",
	},
];

module.exports = async () => {
	console.log("\n");
	console.log("translator seeding");
	await translatorModel.deleteMany({});
	let response = await translatorModel.insertMany(data);
}
