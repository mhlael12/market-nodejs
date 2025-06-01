const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const brand = require("../models/brandModel");
const ApiError = require("../utils/apiError");


// إنشاء تصنيف جديد

exports.creatbrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const newbrand = await brand.create({ name, slug: slugify(name) });
  res.status(201).json({ data: newbrand });
  //     console.log(req.body.name);
  // //ser

  //   const newCategory = new Categorymodel({name});
  //   newCategory.save().then((doc)=>{
  //     res.json(doc);}).catch((err)=>{ش
  //         res.json(err);
  //     })
});

// جلب جميع التصنيفات مع التصفية والتقسيم إلى صفحات

exports.getbrands = asyncHandler(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit; // (2-1)*5= 5 skip 5 to page 2
  const brands = await brand.find({}).skip(skip).limit(limit);
  // .then((categories) => res.json(categories))
  // .catch((err)=>{  })

  res.status(200).json({ results: brands.length, page, data: brands });
});

// جلب تصنيف واحد حسب الـ ID

exports.getbrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const findbrand = await brand.findById(id);
  if (!findbrand) {
    // res.status(404).json({msg:`no category for this id ${id} `});
    return next(new ApiError(`no brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: findbrand });
});

// update -- put /api/v1/categories/:id
// تحديث تصنيف موجود

exports.updatebrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatebrand = await brand.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true },
  );
  if (!updatebrand) {
    // res.status(404).json({msg:`no category for this id ${id} `});
    return next(new ApiError(`no brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: updatebrand });
});

// delete
exports.deletebrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const deletebrand = await brand.findOneAndDelete({ _id: id });
  if (!deletebrand) {
    // res.status(404).json({msg:`no category for this id ${id} `});
    return next(new ApiError(`no brand for this id ${id}`, 404));
  }
  res.status(204).send();
});
