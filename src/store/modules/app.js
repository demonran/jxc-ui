const app = {
    state: {
        sidebar: {
            opened: true
        },
        device: 'desktop'
    },
    getters: {
        sidebar: state => state.sidebar,
        device: state => state.device
    },
    mutations: {
        TOGGLE_SIDEBAR: (state) => {
            state.sidebar.opened = !state.sidebar.opened
        }
    },

    actions: {
        ToggleSideBar: ({commit}) => {
            commit('TOGGLE_SIDEBAR')
        },
    }
}

export default app
