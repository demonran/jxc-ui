import { decrypt } from '@/utils/rsaEncrypt'
import {login} from '@/api/login'
import {getToken, setToken} from '@/utils/auth'

const user = {
     state:{
        token: getToken(),
         user: {
            avatar:'https://api.auauz.net/avatar/test-20190929044732308.jpg'
         }
     } ,
    getters:{
         token : state => state.token,
        user: state => state.user,
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
                     setToken("token")
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
