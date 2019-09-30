const permission = {
    state:{
        routes: [ {
            path: '/',
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: () => import('@/views/bom'),
                    name: 'Dashboard',
                    meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
                }
            ]
        }]
    },

    getters: {
        permission_routers: state => state.routes,
    }
}

export default permission
