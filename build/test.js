const Builder = require('./Builder.js');

let build = new Builder();
console.log("Created builder :)");

build.setVariable("black", "#800").setVariable("default", "#0F0").build(__dirname + "/../scss/style.scss", __dirname + "/../style.css");
