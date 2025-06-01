const express = require("express");
const {
  getbrandvalidator,
  creatbrandvalidator,
  updatebrandvalidator,
  deletebrandvalidator,
} = require("../utils/validators/brandvalidator");

const {
  creatbrand,
  getbrands,
  getbrand,
  updatebrand,
  deletebrand,
} = require("../services/brandServices");

const router = express.Router();



router.route("/").get(getbrands).post(creatbrandvalidator, creatbrand);
router
  .route("/:id")
  .get(getbrandvalidator, getbrand)
  .put(updatebrandvalidator, updatebrand)
  .delete(deletebrandvalidator, deletebrand);

// router.post('/',creatbrand);

// router.get('/',getbrand);

module.exports = router;
// ser
