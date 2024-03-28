/*
 * @file: index.js
 * @description: It Contain db setup function.
 * @author: Manthan Vaghasiya
 */
require = require("esm")(module /*, options*/);

const mongoose = require("mongoose");




/* development connection string */
// const databaseUrl = process.env.ATLAS_URL;
const databaseUrl = "mongodb+srv://Shahrukh:Ansari12311@cluster0.uiuq3hd.mongodb.net/JSR";

console.log("DB URL:", databaseUrl);
// Mongoose setup with server
let connection = mongoose.connect(
  databaseUrl
);

module.exports = connection;
