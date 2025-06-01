const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/ValidatorMiddleware");

exports.getbrandvalidator = [
  check("id").isMongoId().withMessage("Invalid brand id format"),
  validatorMiddleware,
];

exports.creatbrandvalidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3 })
    .withMessage("Too short brand name")
    .isLength({ max: 32 })
    .withMessage("Too long brand name"),
  validatorMiddleware,
];

exports.updatebrandvalidator = [
  check("id").isMongoId().withMessage("Invalid brand id format"),
  validatorMiddleware,
];

exports.deletebrandvalidator = [
  check("id").isMongoId().withMessage("Invalid brand id format"),
  validatorMiddleware,
];
