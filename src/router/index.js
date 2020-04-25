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

      },
      {
        path: "/log-out",
        name:"log-out",
        component: () =>import("../views/frontend/Auth/logOut.vue"),

      }
    ]
  },
  {
    path: "/admin-login",
    name:"admin-login",
    component: () =>import("../views/frontend/Auth/auth-master.vue"),
     redirect:{path:'/admin-login/login'},
       children:[
        {
         path:'login',
         name:'login',
         component:()=>import('../views/frontend/Auth/login.vue'),
        },
        {
         path:'register',
         name:'admin-register',
         component:()=>import('../views/frontend/Auth/Register.vue'),
        },
    ]
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:()=>import('../views/admin/admin-master.vue'),
    children:[
      {
       path:'add-category',
       name:'add-category',
       component:()=>import('../views/admin/category/add_category.vue'),
      },
      {
        path:'all-category',
        name:'all-category',
        component:()=>import('../views/admin/category/all_categories.vue'),
       },
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
  mode: 'history',

  routes
});

export default router;
