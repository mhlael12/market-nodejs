const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const subCategory = require("../models/subCategoryModel");
const ApiError = require("../utils/apiError");
// const category = require("../models/subCategoryModel"); // 
exports.setCategoryIdtoBody = (req, res, next) => {
//nested route
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
  
}
// إنشاء تصنيف جديد

exports.createsubCategory = asyncHandler(async (req, res) => {
  
  const { name, category } = req.body;
  const newsubCategory = await subCategory.create({ name, slug: slugify(name), category });
  res.status(201).json({ data: newsubCategory });
  //     console.log(req.body.name);
  // //ser

  //   const newCategory = new Categorymodel({name});
  //   newCategory.save().then((doc)=>{
  //     res.json(doc);}).catch((err)=>{ش
  //         res.json(err);
  //     })
});

exports.createFilterObj = (req, res, next) => {
  let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
  req.filterObj = filterObject;
  next();

}


exports.getSubCategory = asyncHandler(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit; // (2-1)*5= 5 skip 5 to page 2

  
  const subCategories = await subCategory.find(req.filterObj ).skip(skip).limit(limit);
    // .populate({ path: "category", select: "name -_id" }); // لمعرفة الكاتيكوري اللي تنتمي اليها ال subcategorz
  // .then((SubCategories) => res.json(SubCategories))
  // .catch((err)=>{  })

  res.status(200).json({ results: subCategories.length, page, data: subCategories });
});

// جلب تصنيف واحد حسب الـ ID

exports.getSubCategories = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const findSubCategory = await subCategory.findById(id);
  if (!findSubCategory) {
    // res.status(404).json({msg:`no SubCategory for this id ${id} `});
    return next(new ApiError(`no SubCategory for this id ${id}`, 404));
  }
  res.status(200).json({ data: findSubCategory });
});

exports.updatesubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, category } = req.body;

  const updatesubCategory = await subCategory.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name),category },
    { new: true },
  );
  if (!updatesubCategory) {
    // res.status(404).json({msg:`no subCategory for this id ${id} `});
    return next(new ApiError(`no subCategory for this id ${id}`, 404));
  }
  res.status(200).json({ data: updatesubCategory });
});

// delete
exports.deletesubCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const deletesubCategory = await subCategory.findOneAndDelete({ _id: id });
  if (!deletesubCategory) {
    // res.status(404).json({msg:`no subCategory for this id ${id} `});
    return next(new ApiError(`no subCategory for this id ${id}`, 404));
  }
  res.status(204).send();
});
