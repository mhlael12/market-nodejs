const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const globalError = require("./middleware/errorMiddleware");
const ApiError = require("./utils/apiError");
const categoryRoutes = require("./routes/categoryRoutes");
const dbConnection = require("./config/database");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const brandRoutes  = require('./routes/brandRoutes')

// connect with db
dbConnection();

// express app
const app = express();
// middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// ser
// mount routes
 app.use("/api/v1/Categories", categoryRoutes);
app.use("/api/v1/subCategories", subCategoryRoutes);
app.use("/api/v1/brands", brandRoutes);


app.all("/{*any}", (req, res, next) => {
  // const err = new Error (`can't find this route: ${req.originalUrl}`);
  // next(err.message);

  next(new ApiError(`can't find this route: ${req.originalUrl}`, 400));
});
// global error hundling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`APP RUNNING ON PORT ${PORT}`);
});

// events => listen => callback (err)  ;       catch error out of express ; handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Errors : ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`shutting down ..........!`);
    process.exit(1);
  }); //           close          ثم تم ايقاف التطبيق
  //  exit       تم توقيف السيرفر ب
});
