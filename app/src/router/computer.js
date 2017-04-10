const Home = r => require.ensure([], () => r(require('@/views/computer')), 'computer');

const routers = [
    { path: '/', name: 'home', component: Home }
]

export default routers
