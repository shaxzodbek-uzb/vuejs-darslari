
import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutCompany from '../components/AboutCompany';
import ProductSlider from '../components/ProductSlider';
import Index from '../pages/Index';
import NotFount from '../pages/NotFount';
import Product from '../pages/Product';

Vue.use(VueRouter)
const routes = [
    { path: '*', component: NotFount },
    { path: '/', component: Index },
    { path: '/about-company', component: AboutCompany },
    {
        path: '/products', component: ProductSlider
    },
    { path: '/products/:id', component: Product },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})