/*
 * @file: index.js
 * @description: It Contain db setup function.
 * @author: Manthan Vaghasiya
 */
const mongoose = require("mongoose");




/* development connection string */
// const databaseUrl = process.env.ATLAS_URL;
const databaseUrl = "mongodb+srv://vaghasiyamanthan8:YPZS7SIewD7qcePf@jsr001.66gsqiu.mongodb.net/JSR";

console.log("DB URL:", databaseUrl);
// Mongoose setup with server
mongoose.connect(
  databaseUrl,
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log("database not connected",err);
    } else {
      console.log("database connected");
    }
  }
);

module.exports = mongoose;
