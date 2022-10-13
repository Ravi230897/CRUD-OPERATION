const { json } = require("express");
const Empdetails = require("../model/Empdetails");


// Get All Empdetails
const empdetails_all = async(req, res) => {
    try{
        const empdetails = await Empdetails.find();
        res.json(empdetails); 
    } catch (error) {
        res.json({message: error});
    }
};

// Single  Empdetails
const  empdetails_details= async(req, res) => {
    try{
        const empdetails = await Empdetails.findById(req.params.empdetailsId);
        console.log(empdetailsId);
        res.json(empdetails);
    } catch (error) {
        res.json({message: error});
    }

};

// Add New Empdetails
const empdetails_create = async(req, res) => {
    const empdetails = new Empdetails({
        // id : "req.body.id",
		Name: "req.body.Name",
		// Salary: "req.body.Salary",
		Designation: "req.body.Designation",
		Mobile_No: "req.body.Mobile_No",
		Email: "req.body.Email",
		Password: "req.body.Password",
		Location: "req.body.Location"
    });
    try{
        const saveEmpdetails = await empdetails.save();
        res.send(saveEmpdetails);
       
    } catch (error) {
        res.status(400).send(error);   
    }
};
  
// Update Empdetails
const empdetails_update = async(req, res) => {
    try{
        const empdetails = {
        id : req.body.id,
		Name: req.body.Name,
		Salary: req.body.Salary,
		Designation: req.body.Designation,
		Mobile_No: req.body.Mobile_No,
		Email: req.body.Email,
		Password: req.body.Password,
		Location: req.body.Location
    };
    const updateEmpdetails = await Empdetails.findByIdAndUpdate(
        {_id: req.params.empdetailsId},
        empdetails
    );
    res.json(updateEmpdetails);
    }catch (error) {
    res.json({message:error});   
    }

};
// Delete Empdetails
const empdetails_delete = async(req, res) => {
    try{
        const removeEmpdetails = await Empdetails.findByIdAndDelete(req.params.empdetailsId);
        res.json(removeEmpdetails);
       
    } catch (error) {
        res.json({message: error});   
    }
};
module.exports={
    empdetails_all,
    empdetails_details,
    empdetails_create,
    empdetails_update,
    empdetails_delete    
}
