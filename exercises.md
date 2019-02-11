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
