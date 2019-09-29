import router from './routers'
import store from '@/store'

router.beforeEach(((to, from, next) => {
    console.log(to.path)
    if(store.getters.token){
        next()
    }else {
        if(to.path.startsWith('/login')) {
            next()
        }else {
            next(`/login?redirect=${to.path}`)
        }

    }
}))

export default router
