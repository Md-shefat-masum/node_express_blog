const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const { share_check_auth } = require("../..");
const website_controller = require("../../app/controllers/frontend/wbsite.controller");
const router = express.Router();

router
	.get("/", website_controller.home)
	.get("/category/:category_name/:category_id", website_controller.category_post)
	.get("/about", function (req, res) {
		return res.render("about");
	})
	.get("/login", function (req, res) {
		return res.render("auth/login");
	})
	.get("/signup", function (req, res) {
		return res.render("auth/register");
	})

module.exports = () => router;