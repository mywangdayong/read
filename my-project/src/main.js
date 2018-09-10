// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import 	Axios from 'axios';

Vue.prototype.$axios = Axios; 
/*Axios.defaults.baseURL = "http://www.wwtliu.com"*/
Vue.prototype.HOST = "/api";
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{ 
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{ //添加getters
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations:{ //添加mutations
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    }
  },
  actions:{ //添加actions
    minusPriceAsync( context, payload ) {
      setTimeout( () => {
        context.commit( 'minusPrice', payload ); //context提交
      }, 2000)	
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}) 
 