const Home = r => require.ensure([], () => r(require('@/views/computer')), 'computer');

// demo
const demoIndex =r=>require.ensure([],()=>r(require('@/demo/index')),'demo');
const deomRotate =r=>require.ensure([],()=>r(require('@/demo/rotate')),'demo');
const deomSquare =r=>require.ensure([],()=>r(require('@/demo/square')),'demo');

const routers = [
    { path: '/', name: 'home', component: Home },

    // demo
    { path:'/demo',name:'demo',component:demoIndex},
    { path: '/demo/rotate', name: 'square', component: deomRotate },
    { path: '/demo/square', name: 'square', component: deomSquare }
]

export default routers
