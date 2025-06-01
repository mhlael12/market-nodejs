const express = require("express");


const { createsubCategory, getSubCategories,
    getSubCategory, updatesubCategory,
    deletesubCategory, setCategoryIdtoBody, createFilterObj } = require("../services/subcategoryServices");
const {createsubCategoryvalidator,getsubcategoriesvalidator, updatesubCategoryvalidator, deletesubCategoryvalidator} = require("../utils/validators/subcategoryvalidator")
  //mergparams        تفيد في وصول البارمتر الموجودة في الروت الاخر  
const router = express.Router({mergeParams:true});


router.route("/").post(setCategoryIdtoBody,createsubCategoryvalidator, createsubCategory).get(createFilterObj,getSubCategory);
router
    .route("/:id")
    .get(getsubcategoriesvalidator, getSubCategories)
    .put(updatesubCategoryvalidator, updatesubCategory)
    .delete(deletesubCategoryvalidator, deletesubCategory)
;

module.exports = router;
