import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "frontend-master",
    component: () =>import("../views/frontend/frontend-master.vue"),
    redirect:{path:"/home"},
        children:[
      {
        path: "/login",
        name:"login",
        component: () =>import("../views/frontend/Auth/login.vue"),

      },
      {
        path: "/home",
        name:"home-page",
        component: () =>import("../views/frontend/home/home.vue"),

      },
      {
        path: "/Register",
        name:"Register",
        component: () =>import("../views/frontend/Auth/Register.vue"),

      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
