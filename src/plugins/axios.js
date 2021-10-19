import axios from 'axios';
export default {
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'https://api.patron-erp.uz/api/',
            headers: {
                Authorization: Vue.localStorage.get("authToken")
            }
        })
    }
}