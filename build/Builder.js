const sass = require('sass');
const fs = require('fs');

class Builder{
	vars = {};

	setVariable(name, value){
		this.vars[name] = value;
		return this; //allow chaining
	}

	getVariables(){
		let varString = Object.keys(this.vars).map((k, i) => `$${k}: ${this.vars[k]};` ).join("\n");
		console.log(`Vars: ${varString}`);
		return varString;
	}

	build(src, dest){
		let res = sass.renderSync({
		//	includePaths: [dir],
			data: this.getVariables() + `@import '${src}';`,
			outFile: dest
		});

//		console.log(`Result: ${JSON.stringify(res)}`);
//		console.log(res.css.toString());
		fs.writeFileSync(dest, res.css.toString());
		console.log(`CSS written to ${dest}`);
	}
}

module.exports = Builder;
