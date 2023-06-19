const { default: mongoose } = require("mongoose");

let userSchema = mongoose.Schema({
	username: String,
	email: String,
	password: String,
},{
	timestamps: true,
})
module.exports = mongoose.model("users", userSchema);
