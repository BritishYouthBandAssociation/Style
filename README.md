# Style
Universal styling/branding using SCSS

## Structure
All the SCSS files required for compilation can be found in the scss directory.

The entry point is `style.scss` - this should only ever contain comments and imports. The imports will be made up of all the partial files, in the following order:

1. base

The stylesheets in this directory are responsible for resetting the styles

2. utils

The stylesheets in this directory are responsible for initialising any variables or mixins that may be required by the components

3. components

The stylesheets in this directory are responsible for creating the styling for each individual component and its states.
Components are UI elements such as buttons or input fields, but can also be more complex things such as cards or modals.

4. layout

The stylesheets in this directory are responsible for initialising a grid system and styling the various different layout segments (e.g. container, header, footer)


The demo subdirectory contains the files necessary to view the components

## Building
Make sure you have sass installed (important!) then run

```
sass scss/style.scss style.scss
```
