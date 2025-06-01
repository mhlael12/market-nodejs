const mongoose = require("mongoose");

// ser

const dbConnection = () => {
  mongoose.connect(process.env.db_uri).then((conn) => {
    console.log(`Database Connected : ${conn.connection.host}`);
  });
  // .catch((err)=>{
  //     console.error(`Database Error : ${err}`);
  //     process.exit(1);
  // });
};

module.exports = dbConnection;
