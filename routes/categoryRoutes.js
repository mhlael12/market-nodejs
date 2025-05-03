const express = require ('express');

const {creatCategory,getCategory} = require("../services/categoryServices");

const router =  express.Router();
router.route('/').get(getCategory).post(creatCategory);

// router.post('/',creatCategory);

// router.get('/',getCategory);

module.exports = router;
//ser