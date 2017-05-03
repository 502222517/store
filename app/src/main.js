import Vue from 'vue'
import App from './App'
import router from './router/index'
import * as utils from '@/libs/utils' 
import Vuex from 'vuex'

// pc 公共组件
import PC_Logo from '@/components/computer/logo'
import PC_Head from '@/components/computer/head'
import PC_Footer from '@/components/computer/footer'
// const PC_Head = r => require.ensure([], () => r(require('@/components/computer/head')), 'pc');

Vue.config.productionTip = false

// 注册vuex
Vue.use(Vuex)

/**
 * 注册全局组件、过滤器、指令
 */
let os =utils.getOS();
if(os == 'pc'){
	Vue.component('vue-logo',PC_Logo);
	Vue.component('vue-head',PC_Head);
	Vue.component('vue-footer',PC_Footer);
}else{

}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
