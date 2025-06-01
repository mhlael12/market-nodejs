const mongoose = require("mongoose");

const brandschema = new mongoose.Schema(
{
    name: {
      type: String,
      required: [true, "brand name is required"],
      unique: [true, "brand must be unique"],
      trim: true,
      minlength: [3, "Too short brand name"],
      maxlength: [32, "Too long brand name"],
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

module.exports= mongoose.model("brand", brandschema);

// ser
