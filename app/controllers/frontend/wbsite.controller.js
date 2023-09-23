const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");

const get_categories = async () => await categoryModel.find();
const controllers = {
	folder_prefix: ``,
	route_prefix: ``,

	home: async function (req, res) {
		let blogs = await blogModel.find().populate('creator').populate('category');
        
		return res.render(`home`, {
			blogs,
            categories: await get_categories(),
		});
	},
	category_post: async function (req, res) {
        let {category_name, category_id} = req.params;

        let categories = await categoryModel.find();
        let blogs = await blogModel.where({category:[category_id]}).find().populate('creator').populate('category');

		return res.render(`category_post`, {
            categories,
            blogs
		});
	},
	login: async function(req,res){
		return res.render("auth/login",{
			categories: await get_categories(),
		});
	},
	signup: async function(req,res){
		return res.render("auth/register",{
			categories: await get_categories(),
		});
	},
};

module.exports = controllers;
