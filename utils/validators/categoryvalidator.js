const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/ValidatorMiddleware");

exports.getcategoriesvalidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  validatorMiddleware,
];

exports.creatcategorayvalidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3 })
    .withMessage("Too short category name")
    .isLength({ max: 32 })
    .withMessage("Too long category name"),
  validatorMiddleware,
];

exports.updatecategorayvalidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  validatorMiddleware,
];

exports.deletecategorayvalidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  validatorMiddleware,
];
