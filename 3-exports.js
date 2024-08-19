const names = require( "./1-names.js");
const sayname = require("./2-utils")
console.log(names);
sayname(names.batman);
sayname(names.superman);
//sayname("deadpool");