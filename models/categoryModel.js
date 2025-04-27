const mongoose = require('mongoose');

const categoryschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    trim: true,
    minlength: [2, 'Too short category name'],
    maxlength: [32, 'Too long category name'],
  },
});

const Categorymodel = mongoose.model('Categories', categoryschema);

module.exports = Categorymodel;
