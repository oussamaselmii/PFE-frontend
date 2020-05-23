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
        path: "/product-details/:product_id",
        name:"product_details",
        component: () =>import("../views/frontend/home/product-details.vue"),

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
       {
        path:'edit-category/:category_id',
        name:'edit-category',
        component:()=>import('../views/admin/category/edit_category.vue'),
       },
       {
        path:'all-products',
        name:'all-products',
        component:()=>import('../views/admin/product/all-products.vue'),
       },
       {
        path:'all-subcategory',
        name:'all-subcategory',
        component:()=>import('../views/admin/category/all_subcategories.vue'),
       },
       {
        path:'add-subcategory',
        name:'add-subcategory',
        component:()=>import('../views/admin/category/add_subcategory.vue'),
       },
       {
        path:'edit-subcategory/:subcategory_id',
        name:'edit-subcategory',
        component:()=>import('../views/admin/category/edit_subcategory.vue'),
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
