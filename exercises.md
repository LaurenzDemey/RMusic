# 1. Setup

## 1A. Create an angular application

### todo presentation material

- workspace
- schematics
  - angular schematics
  - nrwl
- settings
  - ivy rendering
  - multiple projects
  - routing
  - prefix, why it's needed
  - styling (later)
  - skip tests
  - explain why some options are available, while other not (manipulating E2E to cypress for example)

### What we want to do

Create an angular application using the angular console, while exploring the options.

### Steps

1. Download angular console (https://angularconsole.com/)
2. Create a new application using angular console
   - named: "RMusic"
   - no git initialization
   - with routing enabled
   - without tests
   - scss styling

## 1B. Understand TSConfig.json

### todo presentation material

- link between polyfills (core-js) & tsconfig.json (lib)
- strict rules typescript
  - explain each? or some?

### What we want to do

We want to make our TSConfig more strict and more "browser safe".

### Steps

1. enable some strict rules
   - noImplicitReturns
   - noImplicitThis
   - noStrictGenericChecks
   - noUnusedLocals
2. only import lib "es2015" and "dom"

## 1C. linting

### todo presentation material

- extend linting rules
- external linting rules

  - codelyzer
  - rxjs linter
  - ...

- linters

  - scss linter
  - html linter

- list all the "default" rules by tslint + codelyzer
- where to configure linting rules (named file, custom named file, package.json, ...)

### What we want to do

We want to improve quality by having code quality checks using linters.

### Steps

1. Add a few codelyzer rules for all projects (http://codelyzer.com/rules/)
   - banana-in-box
   - contextual-life-cycle
   - decorator-not-allowed
   - pipe-impure
   - templates-no-negated-async
   - no-attribute-parameter-decorator
   - no-conflicting-life-cycle-hooks
   - no-forward-ref
   - no-template-call-expression
   - prefer-output-readonly
     ...
2. (extra) activate linting for hml

   - install htmlhint (https://github.com/htmlhint/HTMLHint)
   - configure htmlhint (https://github.com/htmlhint/HTMLHint/wiki/Rules) => TODO: check if the list below is correct!!!
     - "tagname-lowercase"
     - "attr-lowercase": false,
     - "attr-value-double-quotes"
     - "tag-pair"
     - "spec-char-escape"
     - "id-unique"
     - "src-not-empty"
     - "attr-no-duplication"
     - "title-require"
     - "tag-self-close"
     - "doctype-html5"
     - "style-disabled"
     - "attr-unsafe-chars"
     - "id-class-value": "dash"
   - execute linting using npm command

3. (extra) activate linting for scss
   - install stylelint (https://github.com/stylelint/stylelint)
   - configure stylelint (https://github.com/stylelint/stylelint-config-recommended)
   - execute linting using npm command

## 1D. npm scripts

### todo presentation material

- why "ng": "ng" => .bin local executable
- life cycle hooks
- keyword scripts (prepublishOnly, preinstall, ...)
- grouping?
- lint fixers + integrate into IDE
- difference between calling tslint directly VS ng lint
- npm spawn process using && (serial and stop if 1 fails) VS ; (serial but executes even if first fails) vS & (parallel, but doesn't work on windows)
- npm-run-all

### What we want to do

Add linting tools so that it's easy to use. We are also going to activate the automatic fixers.

### Steps

1. add npm script for linting TS
2. add npm script for linting HTML
3. add npm script for linting SCSS
4. add npm script to execute all linting
5. add npm script to fix all lint issues automatic using fixers

## 1E. formatting

### todo presentation material

- prettier
- prettier configuration
- AST tree - how prettier works
- optimizations
- "Let Prettier take care of code formatting, and TSLint of the rest"

### What we want to do

Align formatting for the whole team by using prettier. To make this work perfectly we need to update linting as well.

### Steps

1. install prettier as dev-dependency
2. configure prettier
3. run prettier using npm command
4. add prettier linting rules for tslint (https://github.com/prettier/tslint-config-prettier)
5. (extra) add prettier linting rules for stylelint (https://github.com/prettier/stylelint-config-prettier)

# 2. Structure

## 2A. pages

### todo presentation material

- todo: provide assets???
- generate 4 pages
- generate layout component?
- routerLink / routerLinkActive / routerOutlet
- rgrev -tsconfig.json

### What we want to do

We want to create a base structure for each page with a menu on top

### Steps

1. copy all assets to your assets folder
2. replace favicon to index.html to support all formats

```html
<link rel="shortcut icon" href="assets/favicon/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon-180x180.png" />
<link rel="icon" type="image/png" href="assets/favicon/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="assets/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="assets/favicon/favicon-96x96.png" sizes="96x96" />
<link
  rel="icon"
  type="image/png"
  href="assets/favicon/android-chrome-192x192.png"
  sizes="192x192"
/>
<meta name="msapplication-square70x70logo" content="assets/favicon/smalltile.png" />
<meta name="msapplication-square150x150logo" content="assets/favicon/mediumtile.png" />
<meta name="msapplication-wide310x150logo" content="assets/favicon/widetile.png" />
<meta name="msapplication-square310x310logo" content="assets/favicon/largetile.png" />
```

3. generate 4 empty components

- home
- hotlist
- library
- search

4. adapt routing to

- match all 4 components
- provide default route
- provide fallback to default route

5. update app component to render 1 page + add menu-items for each route (don't mind styling for now)
6. Test you application, if everything works as expected.
7. install ngRev (https://github.com/mgechev/ngrev)
8. add npm script for building your application to production (ng build --prod)
9. install "webpack-bundle-analyzer" as dev-dependency
10. add npm script for inspecting bundle size ("ng build --prod --stats-json && webpack-bundle-analyzer dist/RMusic/stats.json")
11. look what happens with the bundle when you don't build for prod (check main.js/src/app)

## 2B. lazy load

### todo presentation material

- how to lazy load module
- not lazy load initial route
- different ways to create modules

### What we want to do

We want to optimize code using lazy loading + add more structure

### Steps

1. create a module for each page (tip: --routing flag)
2. move the page component to each module
3. adapt the routing to lazy load the module (except home)
4. cleanup appModule
5. Test you application, if everything works as expected.
6. checkout ngRev again

# 3. Styling

## 3A. SCSS 7-1 pattern

### todo presentation material

- explain scss vs SASS
- short intro what's possible
- 7-1 pattern
- partial files
- !default
- importing partial files / node_modules

### What we want to do

We want to create a more structured way on how to implement scss.

### Steps

1. create a folder called "scss" inside the "src" folder.
2. create the following structure within the "scss" folder

- base
  - \_\_index.scss
  - \_scroller.scss
  - \_typography.scss
  - \_anchor-tags.scss
  - \_body.scss
- layout
  - \_\_index.scss
  - \_grid-system.scss
- variables
  - \_\_index.scss
  - \_colors.scss
  - \_fonts.scss
- vendor
  - \_\_index.scss
  - \_vendor-overrides.scss
  - \_normalize.scss
  - \_vendor-variables-overrides.scss
- main.scss

3. adapt your angular.json to use the new "src/scss/main.scss" file
4. remove styles.scss
5. look on how to import partial scss files

- main.scss should only import \_\_index.scss files from base, layout, variables, vendor)
- \_\_index.scss should import it's content in the right order

6. update background-color to #131313 (using \_variables.scss and \_body.scss)
7. adapt all heading elements + paragraph to the color "white"
8. have some normalization css added into "\_normalize.scss"
9. Verify that everything is working correctly by starting your application.

## 3B. Layout

### todo presentation material

- expose images? already done, no?
- shared component
- why i create new module instead of appComponent
- smart / dumb components
- routing component VS template component (entry component)
- font icon

### What we want to do

We want to create a beautiful layout for our application

### Steps

1. Create a new module named "layout"
2. create a new component named "layout" inside the "layout" module
3. adapt the component to visualize

- logo
- name application
- menu

4. use the new layout component inside the appComponent
5. add a font-icon and use it (search icon in menu)

# 4. Data visualization

## 4A. Album / playlist / artist / song

### todo presentation material

- dumb/smart components
- show result what we want?
- content projection
- screenshot for each component?

### What we want to do

We want to build components to visualize 1 album or 1 playlist or 1 artist or 1 song. Depending on which type it needs to know which one to draw.

### Steps

1. Create a new module called "singleValueModule"
2. Create new components (albumComponent, songComponent, playlistComponent, artistComponent, roundComponent, squareComponent) (don't forget to export!)
3. Adapt the square component to contain 2 content projection slots (app-square-cover & app-square-detail)
4. style the square component so that the detail is below the cover slot. Adapt styling to your preference.
5. Use the square component in the albumComponent. The cover contains an image. The detail should contain album name + artist name (there are assets available for testing the image)
6. Do the same for the playlist component, but it contains a: image, playlist name and total tracks
7. Adapt the round component just like the square component, but with different styling (cover needs to be rounded)
8. Adapt the artist component to use the round component (image, name and followers)
9. Adapt the song component to use the round component (image, song name and artist name)

## 4B. Pipes

### todo presentation material

- memoization (out-of-the-box)
- pure vs impure

### What we want to

We want to transform a number to a more readable number.

### Steps

1. Create a pipe (readableNumberPipe) in singeValueModule
2. Write logic so that it's more readable

For example:

- 0 - 999 => (same number)
- 1 000-1 900 => 1 K
- 1 000 000 - 1 999 999 => 1 M

3. Use this pipe on your followers property in your artist component
4. (extra) Try to round with 1 digital (for example: 1.2 K)

## 4C. Overlay

### todo presentation material

### What we want to

### Steps

# 5. API

## 5A. Fake API

### todo presentation material

### What we want to

### Steps
