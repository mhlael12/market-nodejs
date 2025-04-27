const express = require ('express');

const {creatCategory,getCategory} = require("../services/categoryServices");

const router =  express.Router();

router.post('/',creatCategory);

router.get('/',getCategory);

module.exports = router;