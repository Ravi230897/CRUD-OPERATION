const router = require("express").Router();
const empdetailsController = require('../controllers/empdetailsController'); 

router.post("/", empdetailsController.empdetails_create);
router.get("/", empdetailsController.empdetails_all);
router.get("/:empdetailsId", empdetailsController.empdetails_details);
router.put("/:empdetailsId", empdetailsController.empdetails_update);
router.delete("/:empdetailsId", empdetailsController.empdetails_delete); 

module.exports = router;