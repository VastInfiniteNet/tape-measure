console.log("Hello JSCore!");
console.log("Learn how to write a module on https://jscore.siri.ws/dev/");

let myPackage = require("tape-measure");
let name = myPackage.packageName();
console.log(name);