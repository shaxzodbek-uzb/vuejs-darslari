export default {
    namespaced: true,

    state: {
        count: 0
    },
    mutations: {
        increment(state, n = 1) {
            state.count += n
        }
    },
    getters: {
        countWithText: state => {
            return state.count + ' ta'
        }
    },
    actions: {
        increment(context) {
            context.commit("incement/increment", 10);
        }
    }
};
