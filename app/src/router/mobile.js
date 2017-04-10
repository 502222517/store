const Home = r => require.ensure([], () => r(require('@/views/mobile')), 'mobile');


const routers = [
    { path: '/m/', name: 'home', component: Home }
]

export default routers
