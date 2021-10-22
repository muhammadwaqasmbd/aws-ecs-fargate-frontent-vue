import Vue from "vue";
import Router from "vue-router";
import store from "./store"
import AuthService from "./auth/AuthService";

const auth = new AuthService();

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "login",
      component: () => import("./Login")
    },
    {
        path: "/page1",
        alias: "/page1",
        name: "page1",
        meta: {
          requiresAuth: true
        },
        component: () => import("./Page1")
      },
    {
        path: "/page2",
        alias: "/page2",
        name: "page2",
        meta: {
          requiresAuth: true
        },
        component: () => import("./Page2")
    },
  ]
});

router.beforeEach((to, from, next) => {
    try{
      if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log("authenticated: ",store.getters.authenticated)
        if (store.getters.authenticated === null || store.getters.authenticated === false) {
        //if (localStorage.getItem('isAuthenticated') === null ||localStorage.getItem('isAuthenticated')==="false") {
          next({
            path: '/',
            params: { nextUrl: to.fullPath }
          })
        } else {
          var hash = window.location.hash.substr(1);
          var result = hash.split('&').reduce(function (res, item) {
              var parts = item.split('=');
              res[parts[0]] = parts[1];
              return res;
          }, {});
          if(result && result.access_token){
            localStorage.setItem("token",result.access_token)
          }
          if(result && result.access_token){
            verifyAuth(next,result.access_token, to)
          }else if(localStorage.getItem("token") && localStorage.getItem("token") !== null){
            verifyAuth(next,localStorage.getItem("token"), to)
          } else{
            next({
              path: '/',
              params: { nextUrl: to.fullPath }
            })
          }
        }
      } else {
        next()
      }
    }catch(e){
        console.log("in error")
        console.log(e)
      }
  })
const verifyAuth=(next,access_token, to)=>{
  auth.verifyAuth(access_token).then(res=>{
    console.log("to: ",to)
    if(to.hash){
      next({
        path: '/page1',
      })
    }else{
      next()
    }
}).catch(e=>{
  next({
    path: '/',
    params: { nextUrl: to.fullPath }
  })
})
}

export default router