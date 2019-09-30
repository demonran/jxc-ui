import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/user'
import app from './modules/app'
import permission from './modules/permission'
// import settings from './modules/settings'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:[
        user,
        app,
        permission,
        // settings
    ]
});

export default store;
