import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';
import"@/assets/scss/reset.scss";
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import xksquareUI from "xksquare-ui";
Vue.use(xksquareUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');