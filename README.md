## Webpack-constructor

# ALERT (⚠️) It's own experience of the library author! Download it if you already have a project!

# About

You can build you'r variation of webpack configuration or choose that author created

<p align="center"><img width="400" src="./webpack-constructor.png" /></p>

# Motivation

I'm already tired of watching $100,000 frontend developers post in telegram/slack/forums chats and stuff: "How can webpack be configured?". Damn, just take my bag and don't worry, seriously;

# How to use?

# Choose preset / create custom

```sh
  first: custom/preset
```

# Presets/custom

```sh
  What is the preset do you want to use for project ?
  Vue
  React
  Svelte
  Typescript
  Javascript

  What is the version of webpack do you want to use for project ?
  4
  5

  What is the mode do you want for development for webpack ?
  production
  development
```

# Preset List

```sh
  What is the context would be in Webpack config (example: ./src) ?: ./src
  What is the entry point(s) would be in webpack config (example: ./src/utils/*.ts) ?: ./src/utils/*.ts ./src/scripts/script.ts
  What is the alias(es) would be in webpack config (example) ?: ./src/utils ./src/scripts
  What is the title do you want in html page (default: Hello World) ?: I 💖 Webpack so much
  What is the html template would be in webpack config (example: ./src/main.html) ?: ./src/main.html
  What is the port would be in DevServer ? (default: 3500): 4500
  What is the folder do you want that be an output (default: ./dist) ?: ./dist
  What is the path of your .ts file(s) (default: ./src)? ./src
  What is the path to your tslint.json file (default: ./tslint.json)?: ./tslint.json
  What is the files do you want to watch for changes with starting devServer (default: ./src/images) ? ./src
```

# Custom List (would be so soon)

```sh
  What is the context would be in Webpack config (example: ./src) ?: ./src
  What is the entry point(s) would be in webpack config (example: ./src/utils/*.ts) ?: ./src/utils/*.ts ./src/scripts/script.ts
  What is the language you want to use ?
  Typescript
  Javascript
  Do you want support from CoffeScript ?
  Yes
  No
  Do you want to use Babel ?
  Yes
  No
  Do you want to use preprocessors for html ?
  Yes
  No
  What is the preprocessor do you want to use for html ?
  Pug
  Jade
  EJS
  HandleBars
  Do you want to use preprocessors for css ?
  Yes
  No
  What is the preprocessor do you want to use for css ?
  (Sass/Scss)
  Less
  PostCSS
  Stylus
  Are you want to use images in project ?
  Yes
  No
  What is the extensions need to support images ?
  .png
  .jpeg
  .jpg
  .svg
  .gif
  .webp
  Are you want to use fonts in project?
  Yes
  No
  What is the extensions need to support fonts ?
  .woff
  .ttf
  .eot
  .svg
  .otf
  Do you want to use some of that extensions ?
  .xml
  .yaml
  .csv
  What is the loader do you want to use for static files ?
  file-loader
  url-loader
  raw-loader
  What is the alias(es) would be in webpack config ?: ./src/utils
  Do you want to realise Lazy-Loading ?
  Yes
  No
  Do you want to avoid errors in your styles ?
  Yes
  No
  Do you want to use imports-loader, that allows you to use modules that depend on specific global variables ?
  Yes
  No
  Do you want a caching in webpack ?
  Yes
  No
  Do you want to use a dynamic imports in webpack ?
  Yes
  No
  Do you want to Splitting chunks?
  Yes
  No
  Do you to build a PWA application ?
  Yes
  No
  Do you want to adding banner to each generated chunk ?
  Yes
  No
  Do you want to use Closure library in project ?
  Yes
  No
  Do you want to create a global constants for .... ?
  Yes
  No
  Do you want to create a environment variables for project ?
  Yes
  No
  What is the variables would be ?
  key ...........
  value .........
  Do you want to hash a paths ?
  Yes
  No
  Do you want to using localization in webpack ?
  Yes
  No
  Do you want to set a minimum size of chunks ?
  Yes
  No
  Do you want to set a maximum count of chunks ?
  Yes
  No
  Do you want to create Chrome profile file ?
  Yes
  No
  Do you want to ignore some files ?
  Yes
  No
  Do you want to ignore files in watch mode ?
  Yes
  No
  Do you want integration with some intruments ?
  Gulp
  Grunt
  Mocha
  Karma
  Do you want to use live reload in webpack ?
  Yes
  No
  Do you want to enable HMR(Hot module replacement) in webpack ?
  Yes
  No
  Do you want to use DevServer ?
  Yes
  No
  What is the html template would be in webpack config (example: ./src/html/main.html) ?
  What is the folder do you want, that be an output (default: ./dist) ?
  What is the path to your tslint.json file (default: ./tslint.json) ?
```
