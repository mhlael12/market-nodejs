const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/ValidatorMiddleware");
const subCategoryModel = require("../../models/subCategoryModel");

exports.getsubcategoriesvalidator = [
  check("id").isMongoId().withMessage("Invalid subCategory id format"),
   validatorMiddleware,
 ];

exports.createsubCategoryvalidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 2 })
    .withMessage("Too short subCategory name")
    .isLength({ max: 32 })
    .withMessage("Too long subCategory name"),
    check("category").notEmpty().withMessage("subCategory be belong  to category").isMongoId().withMessage("Invalid Category id format"),
  validatorMiddleware,
];

 exports.updatesubCategoryvalidator = [
   check("id").isMongoId().withMessage("Invalid subCategory id format"),
   validatorMiddleware,
 ];

 exports.deletesubCategoryvalidator = [
   check("id").isMongoId().withMessage("Invalid subCategory id format"),
   validatorMiddleware,
 ];

