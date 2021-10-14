
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        DarkMode: localStorage.getItem('isDark') == 'true'
    },
    mutations: {
        changeDarkMode(state, isOn = true) {
            state.DarkMode = isOn
        }
    },
    getters: {
        isDarkMode: state => {
            return state.DarkMode
        }
    },
    actions: {
        changeDarkModeState(context, isOn) {
            localStorage.setItem('isDark', isOn)
            context.commit("changeDarkMode", isOn);
        },

    }
})