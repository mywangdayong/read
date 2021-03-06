// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 	Axios from 'axios';
import 	VueResource from 'vue-resource';
import store from './vuex/store';
Vue.prototype.$axios = Axios; 
/*Axios.defaults.baseURL = "http://www.wwtliu.com"*/
Vue.prototype.HOST = "/api";
Vue.use(ElementUI);
Vue.use(Mint);
Vue.use(VueResource);
import 'mint-ui/lib/style.css'; 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}) 
 