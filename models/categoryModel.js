const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: [true, "category must be unique"],
      trim: true,
      minlength: [3, "Too short category name"],
      maxlength: [32, "Too long category name"],
    },

    // A and B => shoping.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: true },
);

const categoryModel = mongoose.model("Categories", categoryschema);

module.exports = categoryModel;
// ser
