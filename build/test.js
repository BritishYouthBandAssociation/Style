const Builder = require('./Builder.js');

let build = new Builder();
console.log("Created builder :)");

//do BYBA colours
build.setVariable("default", "#282360").build(__dirname + "/../scss/style.scss", __dirname + "/../style.css");
