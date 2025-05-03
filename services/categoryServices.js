const Categorymodel = require("../models/categoryModel")
const slugify = require('slugify')

exports.creatCategory = (req, res)=>{
    const name =req.body.name;
    Categorymodel.create({name,slug:slugify(name)}).then((category) =>
    res.status(201).json({data:category})).catch(err=>res.status(400).send(err));
//     console.log(req.body.name);
// //ser

//   const newCategory = new Categorymodel({name});
//   newCategory.save().then((doc)=>{
//     res.json(doc);}).catch((err)=>{
//         res.json(err);
//     })
};

exports.getCategory = (req, res)=>{
  /* Categorymodel.find()
    .then((categories) => res.json(categories))
    .catch((err)=>{  })*/
       
   
    res.send();
};
