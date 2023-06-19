const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const { share_check_auth } = require("../..");
const router = express.Router();

router
	.get("/", function (req, res) {
		return res.render("home");
	})
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