import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';
import"@/assets/scss/reset.scss";
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import xksquareUI from "xksquare-ui";
Vue.use(xksquareUI);
import VueTouchRipple from 'vue-touch-ripple'

// import styles
import 'vue-touch-ripple/dist/vue-touch-ripple.css'

// mount with global
Vue.use(VueTouchRipple, {
  // default global options
  color: '#fff',
  opacity: 0.3,
  speed: 1,
  transition: 'ease'
})
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');