import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
import About from "../views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      // name: "home",
      // component: Home
      redirect: "login"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/index.vue")
    },
    {
      path: "/about",
      name: "about",
      commponrnt: About
    }
  ]
});
