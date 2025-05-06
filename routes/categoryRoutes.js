const express = require ('express');

const {creatCategory,getCategories,getCategory , updateCategory, deleteCategory} = require("../services/categoryServices");

const router =  express.Router();
router.route('/').get(getCategory).post(creatCategory);
router.route('/:id').get(getCategories).put(updateCategory).delete(deleteCategory);

// router.post('/',creatCategory);

// router.get('/',getCategory);

module.exports = router;
//ser