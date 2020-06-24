import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// Translation provided by Vuetify (javascript)
import ja from 'vuetify/es5/locale/ja'
import zhHans from 'vuetify/es5/locale/zh-Hans'

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  },
  lang: {
    locales: { ja, zhHans }
  }
})
