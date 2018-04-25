import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font-awesome Regular・Brandsライブラリを使用する場合、onloadでライブラリを追加
import fontawesome from '@fortawesome/fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'

import navbar from './navbar.vue'
import main from './main.vue'

new Vue(
  {
    el: '#app',
    components: {
      "app-nav": navbar,
      "app-main": main
    }
  }
)
