const express = require("express");
const { default: mongoose } = require("mongoose");
const userModel = require("../../app/models/user.model");
const router = express.Router();

router
	.get("/dashboard/user", async function (req, res) {
		const data = await User.find();
		return res.send(data);
		// return res.render("backend/user_management/all");
	})
	.get("/dashboard/user/create", async function (req, res) {
		const data = new userModel({ name: "test2", email: "test2@ex.com", age: "80" });
		let status = "";
		await data
			.save()
			.then(() => (status = data))
			.catch((e) => (status = e.message));

		res.send(status);
		// return res.render("backend/user_management/create");
	})
	.get("/dashboard/user/:id/edit", async function (req, res) {
		let id = req.params.id;
		let name = req.query.name;
		let age = req.query.age;

		let data = await userModel.where({
			_id: id,
		}).findOne();

		data.name = name;
		data.age = age;
		data.save();

		res.send(data);
		// return res.render("backend/user_management/edit");
	})
	.get("/dashboard/user/:id/delete", async function (req, res) {
		let id = req.params.id;
		let data = await userModel.where({
			_id: id,
		}).deleteOne();
		res.send(data);
		// return res.render("backend/user_management/show");
	})
	.get("/dashboard/user/:id", async function (req, res) {
		let id = req.params.id;
		let data = await userModel.where({
			_id: id,
		}).findOne();
		res.send(data);
		// return res.render("backend/user_management/show");
	});

module.exports = () => router;
