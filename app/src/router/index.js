import Vue from 'vue'
import Router from 'vue-router'

import computer from './computer'
import mobile from './mobile'

import * as utils from '@/libs/utils' 

/**
 * 路由
 * 开发时将路由分配到 router1.js、router2.js、...依此类推，在这里组装。
 */
let routers = []

routers = routers.concat(computer)
routers = routers.concat(mobile)

Vue.use(Router)

var router = new Router({
  routes: routers
})
// 判断路由
router.beforeEach((to, from, next) => {

	var os =utils.getOS();

	/*if(os=='pc'){
		next('/');
	}else{
		next('/m');
	}*/

	console.log('from:',from);
	console.log('to:',to);
	console.log('os:',os); 
})

export default router;
