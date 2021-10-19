import Vue from 'vue';
export default {
    state: {
        user: {},
        token: Vue.localStorage.get("authToken")
    },
    mutations: {
        setToken({ state }, token) {
            state.token = token;
            Vue.localStorage.set("authToken", token);
        }
    },
    getters: {
        user({ state }) {
            return state.user
        }
    },
    actions: {
        login(context, form) {
            context.$api.post("auth/login", form).then(res => {
                const token = res.data.access_token;
                context.commit("user/setToken", token);
            });
        }
    }
};
