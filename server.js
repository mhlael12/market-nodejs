const express = require ('express') ; 
const dotenv = require('dotenv');
const morgan = require('morgan');


dotenv.config({path:'config.env'});
const categoryRoutes=require("./routes/categoryRoutes");
const dbConnection = require('./config/database');
//connect with db 
dbConnection();

//express app 
const app = express();
//middlewares
app.use(express.json());

if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`)
};

//ser
//mount routes
app.use('/api/v1/Categories', categoryRoutes);



const PORT=process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT}`);
});
