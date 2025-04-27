const Categorymodel = require("../models/categoryModel")

exports.creatCategory = (req, res)=>{
    const name =req.body.name;
    console.log(req.body.name);


  const newCategory = new Categorymodel({name});
  newCategory.save().then((doc)=>{
    res.json(doc);}).catch((err)=>{
        res.json(err);
    })
};

exports.getCategory = (req, res)=>{
    Categorymodel.find()
    .then((categories) => res.json(categories))
    .catch((err)=>{
        res.json(err);
    })
};
