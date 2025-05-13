const express = require ('express');
const {getcategoriesvalidator,
     creatcategorayvalidator,
    updatecategorayvalidator,
    deletecategorayvalidator}= require('../utils/validators/categoryvalidator')

const {creatCategory,getCategories,getCategory , updateCategory, deleteCategory} = require("../services/categoryServices");

const router =  express.Router();
router.route('/').get(getCategory)
.post(creatcategorayvalidator, creatCategory);
router
.route('/:id')
.get(getcategoriesvalidator, getCategories)
.put(updatecategorayvalidator,updateCategory)
.delete(deletecategorayvalidator,deleteCategory);

// router.post('/',creatCategory);

// router.get('/',getCategory);


module.exports = router;
//ser