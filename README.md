# Style
Universal styling/branding using SCSS

## Structure
All the SCSS files required for compilation can be found in the scss directory. The structure of the directories in this folder will follow an adapted form of the 7-1 Sass Architecture.

The entry point is `style.scss` - this should only ever contain comments and imports. The imports will be made up of all the partial files, in the following order:

1. abstracts

The stylesheets in this directory are responsible for setting up variables, mixins and functions.

2. vendors

The stylesheets in this directory are any external libraries that may be used (in this case, `normalise.css`)

3. base

The stylesheets in this directory are responsible for the boilerplate within the entire site (e.g. typography). If we weren't using an external reset sheet that would go here.

4. layout

The stylesheets in this directory are responsible for initialising a grid system and styling the various different layout segments (e.g. container, header, footer).

5. Components

The stylesheets in this directory are responsible for styling UI components (e.g. button, text input).

As this project is intended as a style *framework*, the remaining 2 parts of the architecture (`pages` and `themes`) have been excluded for now.


The demo subdirectory contains the files necessary to view the components

## Building
This stylesheet is *generalised* so does not have any theme colours. To build without theme colours, simply call `sass scss/style.scss style.css`.

To add theme colours, use the `Builder` class in the `build` folder and override the variables. An example can be found in `test.js`, or something like the following:

```
const Builder = require('build/Builder.js');

let build = new Builder();
build.setVariable("default", "cherry");
build.setVariable("danger", "#00F");
build.setVariable("success", "#BADA55");

build.build("scss/style.scss", "style.css");
```

The above command sets our override for the 3 colours (`default`, `danger`, `success`) then builds the `scss/style.scss` SCSS file and saves the output at `style.css`.
