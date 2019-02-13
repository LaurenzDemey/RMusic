# 1. Setup

## 1A. Create an angular application

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

### What we want to do

Add linting tools so that it's easy to use. We are also going to activate the automatic fixers.

### Steps

1. add npm script for linting TS
2. add npm script for linting HTML
3. add npm script for linting SCSS
4. add npm script to execute all linting
5. add npm script to fix all lint issues automatic using --fix

## 1E. formatting

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
8. (extra) add npm script for building your application to production (ng build --prod)
9. (extra) install "webpack-bundle-analyzer" as dev-dependency
10. (extra) add npm script for inspecting bundle size ("ng build --prod --stats-json && webpack-bundle-analyzer dist/RMusic/stats.json")
11. (extra) look what happens with the bundle when you don't build for prod (check main.js/src/app)

## 2B. lazy load

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
  - \_vendors.scss
  - \_vendor-variables-overrides.scss
- main.scss

3. adapt your angular.json to use the new "src/scss/main.scss" file
4. remove styles.scss
5. look on how to import partial scss files

- main.scss should only import \_\_index.scss files from base, layout, variables, vendor)
- \_\_index.scss should import it's content in the right order

6. update background-color to #131313 (using \_variables.scss and \_body.scss)
7. adapt all heading elements + paragraph to the color "white"
8. Verify that everything is working correctly by starting your application.

## 3B. Layout

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

### What we want to do

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

### What we want to do

We want to add behavior to any element so that an overlay comes on top of it.

### Steps

1. add a component (called overlay) to the singleValueModule
2. provide a content projection slot that accepts everything
3. Render a template beneath the projection slot using ngTemplateOutlet. The template must be passed as an input of the overlayComponent.
4. Only render the template using a boolean variable
5. Listen for mouseenter and mouseleave events using @HostListener and update the boolean variable
6. Apply your overlay component inside your albumComponent (only around the image). Pass in a template with a play icon
7. (extra) If everything works, you can apply it to all the other components as well (song, playlist, artist)
8. (extra) Replace your @hostlisteners and use fromEvent (rxjs) for a more reactive approach

# 5. API

## 5A. Fake API

### What we want to do

We want to use a fake api server to load our data as it would be provided by a real backend.

### Steps

1.  install json-server (https://www.npmjs.com/package/json-server)
2.  create a fake-db folder at project root with a db.json file
3.  use test data below:

```json
{
  "chart": {
    "tracks": {
      "data": [
        {
          "id": 621314462,
          "title": "Khapta",
          "title_short": "Khapta",
          "title_version": "",
          "link": "https://www.deezer.com/track/621314462",
          "duration": 162,
          "rank": 995729,
          "explicit_lyrics": true,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-053221651356adf1569bfb84ed362601-3.mp3",
          "position": 1,
          "artist": {
            "id": 13645509,
            "name": "Heuss L'enfoiré",
            "link": "https://www.deezer.com/artist/13645509",
            "picture": "https://api.deezer.com/artist/13645509/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13645509/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 85084202,
            "title": "En esprit",
            "cover": "https://api.deezer.com/album/85084202/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/album/85084202/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 628330712,
          "title": "Bloody",
          "title_short": "Bloody",
          "title_version": "",
          "link": "https://www.deezer.com/track/628330712",
          "duration": 178,
          "rank": 998456,
          "explicit_lyrics": true,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-c.dzcdn.net/stream/c-cb7fbf10a82378a80d6b699ec54f138e-3.mp3",
          "position": 6,
          "artist": {
            "id": 4087782,
            "name": "Lacrim",
            "link": "https://www.deezer.com/artist/4087782",
            "picture": "https://api.deezer.com/artist/4087782/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/4087782/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 86473532,
            "title": "Lacrim",
            "cover": "https://api.deezer.com/album/86473532/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/album/86473532/tracks",
            "type": "album"
          },
          "type": "track"
        },
        {
          "id": 546875592,
          "title": "Tout oublier",
          "title_short": "Tout oublier",
          "title_version": "",
          "link": "https://www.deezer.com/track/546875592",
          "duration": 202,
          "rank": 998162,
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-2.dzcdn.net/stream/c-20229ae118e9426c9f887b3a185be426-4.mp3",
          "position": 7,
          "artist": {
            "id": 1042268,
            "name": "Angèle",
            "link": "https://www.deezer.com/artist/1042268",
            "picture": "https://api.deezer.com/artist/1042268/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/6dcb118635259133ccc05e4d5fd62fcb/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/6dcb118635259133ccc05e4d5fd62fcb/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/6dcb118635259133ccc05e4d5fd62fcb/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/6dcb118635259133ccc05e4d5fd62fcb/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1042268/top?limit=50",
            "type": "artist"
          },
          "album": {
            "id": 71730882,
            "title": "Brol",
            "cover": "https://api.deezer.com/album/71730882/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/4a2360324af313f73b56fd1f7faaac88/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/4a2360324af313f73b56fd1f7faaac88/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/4a2360324af313f73b56fd1f7faaac88/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/4a2360324af313f73b56fd1f7faaac88/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/album/71730882/tracks",
            "type": "album"
          },
          "type": "track"
        }
      ]
    },
    "albums": {
      "data": [
        {
          "id": 86473532,
          "title": "Lacrim",
          "cover": "https://api.deezer.com/album/86473532/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e59619df8fafabde84431bb6183c3001/1000x1000-000000-80-0-0.jpg",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/86473532/tracks",
          "explicit_lyrics": true,
          "position": 1,
          "artist": {
            "id": 4087782,
            "name": "Lacrim",
            "link": "https://www.deezer.com/artist/4087782",
            "picture": "https://api.deezer.com/artist/4087782/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/4087782/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 85084202,
          "title": "En esprit",
          "cover": "https://api.deezer.com/album/85084202/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/6106f9b0084433aea99b35dfd1d4f8bd/1000x1000-000000-80-0-0.jpg",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/85084202/tracks",
          "explicit_lyrics": true,
          "position": 2,
          "artist": {
            "id": 13645509,
            "name": "Heuss L'enfoiré",
            "link": "https://www.deezer.com/artist/13645509",
            "picture": "https://api.deezer.com/artist/13645509/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13645509/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 86773062,
          "title": "thank u, next",
          "cover": "https://api.deezer.com/album/86773062/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/49e86e935da829b44cb5ffae16826e55/1000x1000-000000-80-0-0.jpg",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/86773062/tracks",
          "explicit_lyrics": true,
          "position": 3,
          "artist": {
            "id": 1562681,
            "name": "Ariana Grande",
            "link": "https://www.deezer.com/artist/1562681",
            "picture": "https://api.deezer.com/artist/1562681/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1562681/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 85603532,
          "title": "Nyx & Erèbe",
          "cover": "https://api.deezer.com/album/85603532/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/3f8364013a82c03687204293bbfbc3ea/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/3f8364013a82c03687204293bbfbc3ea/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/3f8364013a82c03687204293bbfbc3ea/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/3f8364013a82c03687204293bbfbc3ea/1000x1000-000000-80-0-0.jpg",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/85603532/tracks",
          "explicit_lyrics": true,
          "position": 4,
          "artist": {
            "id": 12490752,
            "name": "YL",
            "link": "https://www.deezer.com/artist/12490752",
            "picture": "https://api.deezer.com/artist/12490752/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9efb588726a7a7483f7c1895cf987ac2/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9efb588726a7a7483f7c1895cf987ac2/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9efb588726a7a7483f7c1895cf987ac2/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9efb588726a7a7483f7c1895cf987ac2/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/12490752/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        }
      ]
    },
    "artists": {
      "data": [
        {
          "id": 4087782,
          "name": "Lacrim",
          "link": "https://www.deezer.com/artist/4087782",
          "picture": "https://api.deezer.com/artist/4087782/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/133332a97ee5928b122b38f809bd0b91/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/4087782/top?limit=50",
          "position": 1,
          "type": "artist",
          "followers": 55000
        },
        {
          "id": 1562681,
          "name": "Ariana Grande",
          "link": "https://www.deezer.com/artist/1562681",
          "picture": "https://api.deezer.com/artist/1562681/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0719cb42b0b06111594604402ba085a5/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/1562681/top?limit=50",
          "position": 2,
          "type": "artist",
          "followers": 5400
        },
        {
          "id": 13645509,
          "name": "Heuss L'enfoiré",
          "link": "https://www.deezer.com/artist/13645509",
          "picture": "https://api.deezer.com/artist/13645509/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/c1950d01eb6f6100c1296fa4199329f7/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/13645509/top?limit=50",
          "position": 3,
          "type": "artist",
          "followers": 54788000
        },
        {
          "id": 5111084,
          "name": "Lomepal",
          "link": "https://www.deezer.com/artist/5111084",
          "picture": "https://api.deezer.com/artist/5111084/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bcf25807dd3e29b8622a1101dae0edbf/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bcf25807dd3e29b8622a1101dae0edbf/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bcf25807dd3e29b8622a1101dae0edbf/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bcf25807dd3e29b8622a1101dae0edbf/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/5111084/top?limit=50",
          "position": 4,
          "type": "artist",
          "followers": 200000
        }
      ]
    },
    "playlists": {
      "data": [
        {
          "id": 2098157264,
          "title": "Hits of the Moment",
          "public": true,
          "nb_tracks": 60,
          "link": "https://www.deezer.com/playlist/2098157264",
          "picture": "https://api.deezer.com/playlist/2098157264/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/372ac166ce2bda6c82ee6f0d106f2d20/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/372ac166ce2bda6c82ee6f0d106f2d20/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/372ac166ce2bda6c82ee6f0d106f2d20/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/372ac166ce2bda6c82ee6f0d106f2d20/1000x1000-000000-80-0-0.jpg",
          "checksum": "4fa353fe2b1d49649e3973b3c2fe5e21",
          "tracklist": "https://api.deezer.com/playlist/2098157264/tracks",
          "creation_date": "2016-08-04 15:42:22",
          "user": {
            "id": 753546365,
            "name": "Dom - Pop Music Editor",
            "tracklist": "https://api.deezer.com/user/753546365/flow",
            "type": "user"
          },
          "type": "playlist"
        },
        {
          "id": 1256571301,
          "title": "Top Hits BE",
          "public": true,
          "nb_tracks": 88,
          "link": "https://www.deezer.com/playlist/1256571301",
          "picture": "https://api.deezer.com/playlist/1256571301/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/501e7063a6cdabbd54138ff6bcd0f7b9/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/501e7063a6cdabbd54138ff6bcd0f7b9/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/501e7063a6cdabbd54138ff6bcd0f7b9/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/501e7063a6cdabbd54138ff6bcd0f7b9/1000x1000-000000-80-0-0.jpg",
          "checksum": "65db4b14c9c6f29baf63d92989d87d53",
          "tracklist": "https://api.deezer.com/playlist/1256571301/tracks",
          "creation_date": "2015-06-02 13:20:15",
          "user": {
            "id": 302519165,
            "name": "Deezer Belgium Editor",
            "tracklist": "https://api.deezer.com/user/302519165/flow",
            "type": "user"
          },
          "type": "playlist"
        },
        {
          "id": 1996494362,
          "title": "Rap Bangers",
          "public": true,
          "nb_tracks": 60,
          "link": "https://www.deezer.com/playlist/1996494362",
          "picture": "https://api.deezer.com/playlist/1996494362/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/1e933660b74f1cad17e9f37c7cc7ef71/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/1e933660b74f1cad17e9f37c7cc7ef71/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/1e933660b74f1cad17e9f37c7cc7ef71/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/1e933660b74f1cad17e9f37c7cc7ef71/1000x1000-000000-80-0-0.jpg",
          "checksum": "69d2516ae3e6cfb9ede43f80617806cc",
          "tracklist": "https://api.deezer.com/playlist/1996494362/tracks",
          "creation_date": "2016-07-05 14:34:42",
          "user": {
            "id": 917475151,
            "name": "Mehdi Rap Editor",
            "tracklist": "https://api.deezer.com/user/917475151/flow",
            "type": "user"
          },
          "type": "playlist"
        },
        {
          "id": 3272614282,
          "title": "Rapstars",
          "public": true,
          "nb_tracks": 50,
          "link": "https://www.deezer.com/playlist/3272614282",
          "picture": "https://api.deezer.com/playlist/3272614282/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/4ae547737993aa7458489dc75999e112/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/4ae547737993aa7458489dc75999e112/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/4ae547737993aa7458489dc75999e112/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/4ae547737993aa7458489dc75999e112/1000x1000-000000-80-0-0.jpg",
          "checksum": "76e2306594e22ba54d8b7b55cd367ce0",
          "tracklist": "https://api.deezer.com/playlist/3272614282/tracks",
          "creation_date": "2017-06-19 10:08:54",
          "user": {
            "id": 917475151,
            "name": "Mehdi Rap Editor",
            "tracklist": "https://api.deezer.com/user/917475151/flow",
            "type": "user"
          },
          "type": "playlist"
        }
      ]
    }
  },
  "album": {
    "id": "302127",
    "title": "Discovery",
    "upc": "724384960650",
    "link": "https://www.deezer.com/album/302127",
    "share": "https://www.deezer.com/album/302127?utm_source=deezer&utm_content=album-302127&utm_term=0_1550071916&utm_medium=web",
    "cover": "https://api.deezer.com/album/302127/image",
    "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
    "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
    "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
    "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
    "genre_id": 113,
    "genres": {
      "data": [
        {
          "id": 113,
          "name": "Dance",
          "picture": "https://api.deezer.com/genre/113/image",
          "type": "genre"
        }
      ]
    },
    "label": "Parlophone France",
    "nb_tracks": 14,
    "duration": 3660,
    "fans": 191145,
    "rating": 0,
    "release_date": "2001-03-07",
    "record_type": "album",
    "available": true,
    "tracklist": "https://api.deezer.com/album/302127/tracks",
    "explicit_lyrics": false,
    "explicit_content_lyrics": 7,
    "explicit_content_cover": 0,
    "contributors": [
      {
        "id": 27,
        "name": "Daft Punk",
        "link": "https://www.deezer.com/artist/27",
        "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1550071916&utm_medium=web",
        "picture": "https://api.deezer.com/artist/27/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
        "type": "artist",
        "role": "Main"
      }
    ],
    "artist": {
      "id": "27",
      "name": "Daft Punk",
      "picture": "https://api.deezer.com/artist/27/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
      "type": "artist"
    },
    "type": "album",
    "tracks": {
      "data": [
        {
          "id": "3135553",
          "readable": true,
          "title": "One More Time",
          "title_short": "One More Time",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135553",
          "duration": "320",
          "rank": "851865",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-7.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135554",
          "readable": true,
          "title": "Aerodynamic",
          "title_short": "Aerodynamic",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135554",
          "duration": "212",
          "rank": "715385",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 6,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135555",
          "readable": true,
          "title": "Digital Love",
          "title_short": "Digital Love",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135555",
          "duration": "301",
          "rank": "670226",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135556",
          "readable": true,
          "title": "Harder Better Faster Stronger",
          "title_short": "Harder Better Faster Stronger",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135556",
          "duration": "224",
          "rank": "760033",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135557",
          "readable": true,
          "title": "Crescendolls",
          "title_short": "Crescendolls",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135557",
          "duration": "211",
          "rank": "551527",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135558",
          "readable": true,
          "title": "Nightvision",
          "title_short": "Nightvision",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135558",
          "duration": "104",
          "rank": "526712",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 6,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-1.dzcdn.net/stream/c-155b4d90d3d16d951e3d67c297988edc-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135559",
          "readable": true,
          "title": "Superheroes",
          "title_short": "Superheroes",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135559",
          "duration": "237",
          "rank": "572273",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3d8caae0a1c59f417f31bb747c43818b-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135560",
          "readable": true,
          "title": "High Life",
          "title_short": "High Life",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135560",
          "duration": "201",
          "rank": "530822",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8052077a75a884e93bda2e2b63f74bbb-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135561",
          "readable": true,
          "title": "Something About Us",
          "title_short": "Something About Us",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135561",
          "duration": "232",
          "rank": "697481",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 6,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-4.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135562",
          "readable": true,
          "title": "Voyager",
          "title_short": "Voyager",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135562",
          "duration": "227",
          "rank": "608390",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-9.dzcdn.net/stream/c-98625d3ad54e88765fdfb812de62e515-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135563",
          "readable": true,
          "title": "Veridis Quo",
          "title_short": "Veridis Quo",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135563",
          "duration": "345",
          "rank": "754267",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-4.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135564",
          "readable": true,
          "title": "Short Circuit",
          "title_short": "Short Circuit",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135564",
          "duration": "206",
          "rank": "468525",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6ef3bfc9e8f226b582bade5842df4517-6.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135565",
          "readable": true,
          "title": "Face To Face",
          "title_short": "Face To Face",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135565",
          "duration": "240",
          "rank": "590403",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7af918cb131b9d5b8f5c1e40e62da91b-6.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        },
        {
          "id": "3135566",
          "readable": true,
          "title": "Too Long",
          "title_short": "Too Long",
          "title_version": "",
          "link": "https://www.deezer.com/track/3135566",
          "duration": "600",
          "rank": "539170",
          "explicit_lyrics": false,
          "explicit_content_lyrics": 0,
          "explicit_content_cover": 0,
          "preview": "https://cdns-preview-d.dzcdn.net/stream/c-ddf495316e2afbe4327d9a6e17840a69-5.mp3",
          "artist": {
            "id": "27",
            "name": "Daft Punk",
            "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
            "type": "artist"
          },
          "type": "track"
        }
      ]
    }
  }
}
```

4. add npm script which starts the json server for db.json. Give it "fake-api" as script name and execute this script.
5. verify that the api is up.
6. create an api folder inside app folder. It should contain an interface folder, a model folder
7. create a fake-api service module and add a chart service and album service file (don't forget the barrel files)
8. create an app.config.ts file at app folder level. This file will have the base url to the json server. Paste the following:

```typescript
export const appConfig = {
  baseUrl: 'http://localhost:3000/'
};
```

9. implement the services to get a list of charts and albums from the json server.

- use the base url inside your request
- make sure to use Rxjs
- map the result to return an object of type IChart and IAlbum which has the following properties:
  ```typescript
  export interface IChart {
    name: string;
    img: string;
    totalTracks?: number;
    followers?: number;
    artist?: string;
    type: string;
  }
  ```
  ```typescript
  export interface IAlbum {
    name: string;
    img: string;
    artist: string;
  }
  ```

10. show a list of charts in home. Make use of the single value components you created in the previous steps
11. show a list of albums in the hotlist page. Use a proper single value component to visualise the data.

## 5B. Deezer

### What we want to do

We want to switch easily between different api's buy changeing the export statement in a barrelfile using injections token and service interfaces

### Steps

1. install @angular/http and save to dependencies
2. add a new folder inside api called "deezer"
3. create a model folder with following typescript files (don't forget barrel file):

- album.dto

```typescript
export interface IAlbumDto {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  record_type: string;
  tracklist: string;
  explicit_lyrics: boolean;
  position: number;
  artist: IArtistDto;
  type: string;
}
```

- albums.dto

```typescript
export interface IAlbumsDto {
  data: IAlbumDto[];
  total: number;
}
```

- artist.dto

```typescript
export interface IArtistDto {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  position?: number;
  nb_album: number;
  nb_fan: number;
}
```

- artists.dto

```typescript
export interface IArtistsDto {
  data: IArtistDto[];
  total: number;
}
```

- chart.dto

```typescript
export interface IChartDto {
  tracks: ITracksDto;
  albums: IAlbumsDto;
  artists: IArtistsDto;
  playlists: IPlaylistsDto;
}
```

- creator.dto

```typescript
export interface ICreatorDto {
  id: string;
  name: string;
  tracklist: string;
  type: string;
  link?: string;
}
```

- playlist.dto

```typescript
export interface IPlaylistDto {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  user: IUserDto;
  type: string;
  description: string;
  duration: number;
  is_loved_track: boolean;
  collaborative: boolean;
  fans: number;
  share: string;
  creator: ICreatorDto;
  tracks: ITracksDto;
}
```

- playlists.dto

```typescript
export interface IPlaylistsDto {
  data: IPlaylistDto[];
  total: number;
}
```

- track.dto

```typescript
export interface ITrackDto {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  position: number;
  artist: IArtistDto;
  album: IAlbumDto;
  type: string;
}
```

- tracks.dto

```typescript
export interface ITracksDto {
  data: ITrackDto[];
  total: number;
}
```

- user.dto

```typescript
export interface IUserDto {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}
```

4. add the folowing files to the model folder from the previous step:

- artist.interface

```typescript
export interface IArtist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_medium: string;
  radio: boolean;
  tracklist: string;
  nb_album: number;
  nb_fan: number;
}
```

- playlist.interface

```typescript
export interface IPlaylist {
  title: string;
  nb_tracks: number;
  link?: string;
  img: string;
  tracklist?: string;
  creation_date?: string;
  type?: string;
  description?: string;
  duration?: number;
  is_loved_track?: boolean;
  fans: number;
  share?: string;
  tracks: ITrack[];
}
```

- track.interface

```typescript
export interface ITrack {
  id: number;
  name: string;
  link?: string;
  duration: number;
  preview: string;
  position?: number;
  artist: string;
  img?: string;
  type: string;
}
```

- tracks.interface

```typescript
export interface ITracks {
  data: ITrack[];
  total: number;
}
```

5. modify the IAlbum and the IChart interface width:

```typescript
export interface IAlbum {
  id?: number;
  name: string;
  img: string;
  record_type?: string;
  tracklist?: string;
  position?: number;
  artist: IArtist;
  type?: string;
}

export interface IChart {
  id: number;
  name?: string;
  img: string;
  totalTracks?: number;
  followers?: number;
  artist?: string;
  type: string;
  title?: string;
  tracklist?: string;
  totalFollowers?: number;
}
```

6. add following files to the interface folder from the previous step:

- artist.interface
  - add method "getArtist" which accepts an id and returns an observable of type IArtist
  - add method "getArtistTracks" which accepts a url and returns an observable of type ITrack[]
- playlist.interface
  - add method "getPlaylist" which accepts an id and returns an observable of type IPlaylist
  - add method "getPlaylistTracks" which accepts a url and returns an observable of type ITrack[]
- track.interface
  - add method "getTrack" which accepts an id and returns an observable of type ITrack

7. modify album.interface of the interface folder:

- add method "getAlbumTracks" which accepts a url and returns an observable of type ITrack[]

8. create a service module called "deezer" with the following services. For each service implement the corresponding interface from the interface folder:

- album.service
- artist.service
- chart.service
- playlist.service
- track.service

Make sure to use Rxjs operators to become the expected return results

9. Modify the service from the fake-api folder with the changes you've made in the deezer implementation
10. add injection token file in api folder and register injection tokens for the different services.

- change deezer module to provide those injection tokens
- change fake-api to also provide the tokens

11. modify the home component and the hotlist component so that the injection tokens injected with there proper interface are injected instead of the class type.
12. inject the playlist service and get playlist with id 1266968331 and show the playlist on the hotlist page.
13. change the fake-api for the deezer
14. make sure averything works again.

# 6. Music player

## 6A. Player component

### todo presentation material

### What we want to

We want to create a music player, which handles play, pause, next and previous

### Steps

# 7. Extra

## 7A. Tabs

### What we want to do

We want to build a tabs component

### Steps

1. create a module called "tabsModule"
2. create a component called "tabsComponent"
3. create a directive called "tabDirective"
4. update your directive to support passing in a label
5. Update your directive to retrieve the (@viewChild) host template on which this directive was used
6. Update your component to get a list of all (@ContentChildren) children with the attribute/directive "appTab'. Put it in a property called "tabs".
7. Update your component: after the content has initialized, take the first tab of the "tabs" and put it in a property called "activeTab"
8. Update the html of your component to render like tabs. The active tab label should be highlighted and the content of the active tab should be visualized using ngTemplateOutlet.
9. You can test your tabs component inside the library page.

## 7B. Scroll behavior

### What we want to

We want to create a directive that add a class on an element when a specific treshold is passed.

### Steps

1. add a new module called "scroll-class"
2. add a new directive called "scrollClassDirective"
3. update that directive to retrieve a treshold value (number)
4. use a HostListener to listen for scroll events on the window object. Calculate if the position of the host component is higher than the scrollposition. Save this into a property
5. use a hostBinding to add a class "scrolled" when that previous propery (is hostComponent higher than scrollposition) is true
6. Before you can test it out, we need to add an @input (scrollTreshold) on TabsComponent to accept a specific treshold
7. You can activate the appScrollClass attribute on the headers of the tabs (we only want to add a class on the headers, while the content should remain scrollable)
8. pass the scrollTreshold to the appScrollClass
9. adapt styling when the class "scrolled" is added (position fixed).
10. work with inline style to style the "top" property using the scrollTreshold property
11. Check if everything works
12. (extra) You can also add the appScrollClass inside the layout component. For example to render a toolbar which is not transparant.
13. (extra) Make your UI in the home page more beautiful by adding an image with transparant gradient
