import 'babel-polyfill';
import Vue from 'vue';
import router from "@/router";
import store from "@/store";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = new Vue({
  router,
  store,
  el: "#app",
  render: h => h("router-view")
});