"use strict";
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Form from "./views/Form.vue";
import Builder from "./views/Builder.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/form",
            name: "form",
            component: Form,
        },
        {
            path: "/builder",
            name: "builder",
            component: Builder,
        },
    ],
});
