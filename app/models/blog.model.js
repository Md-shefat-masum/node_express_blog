const { default: mongoose, Schema } = require("mongoose");
const translatorModel = require("./translator.model");

// let blog = {
//     title: "aaa",
//     short_description: '',
//     description: '',
//     category: [
//         '645bc6f892c7867fa89495a9',
//         '645bc6f892c7867fa89495a23',
//         '645bc6f892c7867fa8949534',
//     ],
//     creator: '645bc6f892c7867fa89495a9',
//     writer: '645bc6f892c7867fa89495a9',
//     translator: '645bc6f892c7867fa89495a9',
//     thumb_image: "uploads/blog/image1.jpg",

//     related_images: [
//         "uploads/blog/image2.jpg",
//         "uploads/blog/image3.jpg",
//         "uploads/blog/image4.jpg",
//     ],

//     published: false,
//     status: true,
//     seo_title: "",
//     seo_description: "",
//     seo_keyword: "",
// }
module.exports = mongoose.model(
	"blogs",
	mongoose.Schema(
		{
			title: {
				type: String,
				required: true,
			},
			short_description: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			category: {
				type: [Schema.Types.ObjectId],
				required: true,
				ref: "categories",
			},
			creator: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "users",
			},
			writer: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "writers",
			},
			writing_date: {
				type: Date,
				default: Date.now,
			},
			translator: {
				type: Schema.Types.ObjectId,
				ref: translatorModel,
			},
			thumb_image: {
				type: String,
				required: true,
			},
			related_images: [String],
			published: {
				type: Boolean,
				defautlt: false,
			},
			status: {
				type: Boolean,
				defautlt: true,
			},

			view: {
				type: Number,
				default: 0,
			},
			seo_title: String,
			seo_description: String,
			seo_keyword: String,
			tags: {
				type: Array,
				default: [],
				required: false,
			},
		},
		{
			timestamps: true,
		}
	)
);
