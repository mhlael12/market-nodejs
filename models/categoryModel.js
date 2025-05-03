const mongoose = require('mongoose');

const categoryschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique:[true, 'category must be unique'],
    trim: true,
    minlength: [3, 'Too short category name'],
    maxlength: [32, 'Too long category name'],
  },

  // A and B => shoping.com/a-and-b
  slug:{
    type:String,
    lowercase:true,
  },
},
{timestamps:true}
);

const Categorymodel = mongoose.model('Categories', categoryschema);

module.exports = Categorymodel;
//ser