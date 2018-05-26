import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import navbarComponent from './navbar.vue'
import mainComponent from './main.vue'
import listComponent from './list.vue'
import formComponent from './form.vue'

Vue.use(BootstrapVue);
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
