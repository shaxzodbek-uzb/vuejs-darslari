
import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutCompany from '../components/AboutCompany';
import ProductSlider from '../components/ProductSlider';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Me from '../pages/Me';
import NotFount from '../pages/NotFount';
import Product from '../pages/Product';
Vue.use(VueRouter)
// Middleware - doim route ochilishidan oldin ishga tushadi
// this.$api.get("auth/me").then(res => {
//     this.user = res.data;
// });
const routes = [
    { path: '*', component: NotFount },
    { path: '/', component: Index },
    { path: '/about-company', component: AboutCompany },
    {
        path: '/products', component: ProductSlider
    },
    { path: '/products/:id', component: Product },
    { path: '/login', component: Login },
    { path: '/me', component: Me },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})