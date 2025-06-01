const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, // ✅ كان مكتوب trime
      unique: [true, "Subcategory name must be unique"],
      minlength: [2, "Too short subcategory name"],
      maxlength: [32, "Too long subcategory name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Categories", // ✅ إذا كان الموديل المقابل هو "Category"
      required: [true, "Subcategory must belong to a parent category"], // ✅ كان مكتوب require
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
