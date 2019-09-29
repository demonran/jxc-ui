import { decrypt } from '@/utils/rsaEncrypt'
import {login} from '@/api/login'

const user = {
     state:{
        token: ''
     } ,
    getters:{
         token : state => state.token
    },
    mutations:{
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },
     actions: {
         Login({commit}, userInfo) {
             let password = decrypt(userInfo.password)
             return new Promise(((resolve, reject) => {
                 login().then(res =>{
                     commit('SET_TOKEN','token')
                     console.log(res.data)
                     resolve()
                 }).catch(error => {
                     reject()
                 } )
             }))

         }
     }
}

export default user
