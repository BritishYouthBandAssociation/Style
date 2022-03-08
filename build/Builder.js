'use strict';

const sass = require('sass');
const fs = require('fs');
const path = require('path');

class Builder{
	vars = {};

	setVariable(name, value){
		this.vars[name] = value;
		return this; //allow chaining
	}

	getVariables(){
		const varString = Object.values(this.vars).map((k, v) => `$${k}: ${v};` ).join("\n");
		console.log(`Vars: ${varString}`);
		return varString;
	}

	build(src, dest){
		src = path.resolve(src);
		const dir = path.dirname(src);
		const res = sass.compileString(this.getVariables() + `@import '${src}';`, {
			loadPaths: [dir]
		});

		fs.writeFileSync(dest, res.css.toString());
		console.log(`CSS written to ${dest}`);
	}
}

module.exports = Builder;
