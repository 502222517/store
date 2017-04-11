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
/**
 * 路由导向,pc、moblie区分导向
 * @param  {[type]} (to, from, next [description]
 */
router.beforeEach((to, from, next) => {
	var os =utils.getOS();
	var index =to.path.indexOf('/m/');
	if(index==-1) {
		index = to.path =='/m' ? 1:-1;
	}
	if(os == 'pc' && index!=-1){
		console.log('pc ==>');
		next('/');
	}else if(os != 'pc' && index==-1){
		console.log('mobile ==>');
		next('/m');
	}else{
		next();
	}
})

export default router;
