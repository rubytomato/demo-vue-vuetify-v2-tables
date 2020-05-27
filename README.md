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

## Vuetify.js Setup

### Add Vuetify

```
$ vue add vuetify
```

### Install eslint-plugin-vuetify

```
$ npm install eslint-plugin-vuetify -D
```

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

```javascript
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/demo-vue-vuetify-v2-tables/",
  outputDir: "docs"
};
```

### Add any files

**.eslintignore**

```
!*.js
!*.ts
coverage/
dist/
node_modules/
public/
```

**.prettierignore**

```
coverage/
dist/
node_modules/
public/
```

**prettier.config.js**

```javascript
/** @type {import('prettier').Options} */
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: "*.{md,yml}",
      options: {
        printWidth: 80,
        semi: true,
        singleQuote: false,
        trailingComma: "none"
      }
    }
  ]
};
```

**.npmrc**

```
engine-strict = true
save-exact = true
```
