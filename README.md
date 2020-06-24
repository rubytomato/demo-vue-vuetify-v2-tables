# demo-vue-vuetify-v2-tables

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Create Vue Project

```
$ vue create demo-vue-vuetify-v2-tables
```

### Configuration & Setting Files

**.browserslistrc**

```
> 1%
last 2 versions
not dead
```

**.eslintrc.js**

```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
```

**babel.config.js**

```javascript
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"]
};
```

## Vuetify.js Setup

### Add Vuetify

```
$ vue add vuetify
```

**vue.config.js**

created configuration file

```javascript
module.exports = {
  transpileDependencies: ["vuetify"]
};
```

### Install eslint-plugin-vuetify

```
$ npm install eslint-plugin-vuetify -D
```

modify .eslintrc.js

add plugins and rules

```javascript
// .eslintrc.js
module.exports = {
  plugins: ["vuetify"],
  rules: {
    "vuetify/no-deprecated-classes": "error"
  }
};
```

### Install Material Design Icons

```
$ npm install @mdi/font -D
```

modify vuetify.js

```javascript
// src/plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});
```

### Vue configuration

**vue.config.js**

modify vue.config.js

add publicPath, outputDir

```javascript
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/demo-vue-vuetify-v2-tables/",
  outputDir: "docs"
};
```

### Add any files

**.eslintignore**

Ignoring Files and Directories
https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories

```
!*.js
!*.ts
coverage/
dist/
node_modules/
public/
```

**.prettierignore**

Ignoring Code
https://prettier.io/docs/en/ignore.html

```
coverage/
dist/
node_modules/
public/
```

**prettier.config.js**

Configuration File
https://prettier.io/docs/en/configuration.html

```javascript
/** @type {import('prettier').Options} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",
  overrides: [
    {
      files: "*.{md,yml}",
      options: {
        printWidth: 80,
        semi: true,
        singleQuote: false
      }
    }
  ]
};
```

**.npmrc**

```
engine-strict = true
save-exact = true
progress = false
```


### VSCode Setting

.vscode/settings.json

```json
{
    "editor.tabSize": 2,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true,
    "vetur.format.defaultFormatter.js": "none"
}
```
