//The Validator npm package provides a way to validator if things via true/false.
// This package can be installed using "npm install validator" inside the terminial while inside your project folder

var validator = require("validator");

const emailValiT = validator.isEmail("Ngreene23@keyin.com"); //Correctly formated email so validator should spit out TRUE

const emailValiF = validator.isEmail("Ngreene23keyin.com"); //Email formated without @ so validator should spit out FALSE

console.log("Ngreene23@keyin.com = " + emailValiT); //console.log = TRUE

console.log("Ngreene23keyin.com = " + emailValiF); //console.log = FALSE
