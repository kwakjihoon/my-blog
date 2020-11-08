import Vue from '/web_modules/vue/dist/vue.esm.browser.js'
import Vuex from '/web_modules/vuex/dist/vuex.esm.browser.js'
import VueRouter from '/web_modules/vue-router/dist/vue-router.esm.browser.js'
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'
const App = 'url:/main_modules/components/App.vue';



Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(httpVueLoader);

const router = new VueRouter({
  routes: [
    { path: '/blog/:blogId', component: httpVueLoader('/main_modules/components/contents/blog/Blog.vue' ) }
    ,{ path: '/', component: httpVueLoader('/main_modules/components/contents/home/Home.vue' ) }
  ]
})

const store = new Vuex.Store({
    state: {
        appName: "GY Tech."
    },
    mutations: {

    }
});
new Vue({
    el: '#root',
    template:"<app></app>",
    store,router,
    components: {
        'app': App
    }
})
