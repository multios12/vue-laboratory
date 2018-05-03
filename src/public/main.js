import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font-awesome Regular・Brandsライブラリを使用する場合、onloadでライブラリを追加
import fontawesome from '@fortawesome/fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'

import navbarComponent from './navbar.vue'
import mainComponent from './main.vue'
import listComponent from './list.vue'
import formComponent from './form.vue'

var app = new Vue(
  {
    el: '#app',
    components: {
      "app-nav": navbarComponent,
      "app-main": mainComponent,
      "app-list": listComponent,
      "app-form": formComponent
    }
  }
)
// app.component('app-nav', navbarComponent)
// app.component('app-main', mainComponent)
