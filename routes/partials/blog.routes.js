const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const router = express.Router();

router
	.use(isAuthMiddleware())
	.get("/dashboard/blog", function (req, res) {
		return res.render("backend/blog_management/all");
	})
	.get("/dashboard/blog/create", function (req, res) {
		return res.render("backend/blog_management/create");
	})
	.get("/dashboard/blog/:id/edit", function (req, res) {
		return res.render("backend/blog_management/edit");
	})
	.get("/dashboard/blog/:id", function (req, res) {
		return res.render("backend/blog_management/show");
	});

module.exports = () => router;
