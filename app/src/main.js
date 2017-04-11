import Vue from 'vue'
import App from './App'
import router from './router/index'
import * as utils from '@/libs/utils' 

// pc 公共组件
import PC_Head from '@/components/computer/head'
// const PC_Head = r => require.ensure([], () => r(require('@/components/computer/head')), 'pc');



Vue.config.productionTip = false

/**
 * 注册全局组件、过滤器、指令
 */
let os =utils.getOS();
if(os == 'pc'){
	Vue.component('vue-head',PC_Head);
}else{

}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
