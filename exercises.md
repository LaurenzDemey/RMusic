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
<link rel="shortcut icon" href="assets/images/favicon/favicon.ico" type="image/x-icon" />
<link
  rel="apple-touch-icon"
  sizes="57x57"
  href="assets/images/favicon/apple-touch-icon-57x57.png"
/>
<link
  rel="apple-touch-icon"
  sizes="60x60"
  href="assets/images/favicon/apple-touch-icon-60x60.png"
/>
<link
  rel="apple-touch-icon"
  sizes="72x72"
  href="assets/images/favicon/apple-touch-icon-72x72.png"
/>
<link
  rel="apple-touch-icon"
  sizes="76x76"
  href="assets/images/favicon/apple-touch-icon-76x76.png"
/>
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="assets/images/favicon/apple-touch-icon-114x114.png"
/>
<link
  rel="apple-touch-icon"
  sizes="120x120"
  href="assets/images/favicon/apple-touch-icon-120x120.png"
/>
<link
  rel="apple-touch-icon"
  sizes="144x144"
  href="assets/images/favicon/apple-touch-icon-144x144.png"
/>
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="assets/images/favicon/apple-touch-icon-152x152.png"
/>
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="assets/images/favicon/apple-touch-icon-180x180.png"
/>
<link rel="icon" type="image/png" href="assets/images/favicon/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="assets/images/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="assets/images/favicon/favicon-96x96.png" sizes="96x96" />
<link
  rel="icon"
  type="image/png"
  href="assets/images/favicon/android-chrome-192x192.png"
  sizes="192x192"
/>
<meta name="msapplication-square70x70logo" content="assets/images/favicon/smalltile.png" />
<meta name="msapplication-square150x150logo" content="assets/images/favicon/mediumtile.png" />
<meta name="msapplication-wide310x150logo" content="assets/images/favicon/widetile.png" />
<meta name="msapplication-square310x310logo" content="assets/images/favicon/largetile.png" />
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
