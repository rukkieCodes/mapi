import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import File from "../views/File.vue";
import Cases from "../views/Cases.vue";
import { fb } from "../firebaseConfig";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: "file",
          name: "file",
          component: File
        },
        {
          path: "cases",
          name: "cases",
          component: Cases
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if(requiresAuth && !currentUser){
    next("/")
  }
  else if(requiresAuth && currentUser){
    next()
  }
  else{
    next()
  }
});

// const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
//   routes
// });

export default router;
