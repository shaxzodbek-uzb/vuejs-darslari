
import Vue from 'vue';
import Vuex from 'vuex';
import increment from './module/increment';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        increment
    }
})