const mongoose = require("mongoose");

const EmpdetailsSchema= new mongoose.Schema({
        // id : Number,
		Name: String,
		// Salary: Number,
		Designation: String,
		Mobile_No: String,
		Email: String,
		Password: String,
		Location: String
});

module.exports = mongoose.model("Empdetails", EmpdetailsSchema);
