const category = require("../models/categoryModel")
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')

// إنشاء تصنيف جديد

exports.creatCategory = asyncHandler(async(req, res)=>{
    const name =req.body.name;
    const newcategory= await category.create({name,slug:slugify(name)});
    res.status(201).json({data: newcategory});
//     console.log(req.body.name);
// //ser


//   const newCategory = new Categorymodel({name});
//   newCategory.save().then((doc)=>{
//     res.json(doc);}).catch((err)=>{
//         res.json(err);
//     })
});




// جلب جميع التصنيفات مع التصفية والتقسيم إلى صفحات

exports.getCategory = asyncHandler(async(req, res)=>{
  const page =req.query.page * 1 || 1 ;
  const limit = req.query.limit * 1 || 5 ; 
  const skip = (page -1 )* limit;//(2-1)*5= 5 skip 5 to page 2 
 const categories = await category.find({}).skip(skip).limit(limit);
    // .then((categories) => res.json(categories))
    // .catch((err)=>{  })
       
   
    res.status(200).json({results:categories.length, page ,data : categories});
});


// جلب تصنيف واحد حسب الـ ID

exports.getCategories= asyncHandler(async(req,res)=> {
  const { id } = req.params;
  const findcategory = await category.findById(id);
  if(!category){
    res.status(404).json({msg:`no category for this id ${id} `});
  }
  res.status(200).json({data : findcategory});

});


// update -- put /api/v1/categories/:id
// تحديث تصنيف موجود

exports.updateCategory = asyncHandler(async (req, res)=> {
const { id } = req.params;
const { name   } = req.body;

const updatecategory = await category.findOneAndUpdate({_id:id} , {name, slug:slugify(name)}, {new : true});
 if(!category){
    res.status(404).json({msg:`no category for this id ${id} `});
  }
  res.status(200).json({data : updatecategory});
});



// delete 
exports.deleteCategory = asyncHandler(async (req, res)=> {
  const { id } = req.params;
  
  const deleteCategory = await category.findOneAndDelete({ _id: id });
   if(!category){
      res.status(404).json({msg:`no category for this id ${id} `});
    }
    res.status(204).send();
  });