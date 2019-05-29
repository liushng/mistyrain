import Vue from 'vue';
import Router from 'vue-router';
import shouYe from "./shouYe/";

Vue.use(Router)

export default new Router({
    routes: [
        ...shouYe
    ]
})