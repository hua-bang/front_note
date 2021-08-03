import VueRouter from "vue-router";

import Login from "../views/Login/index.vue";
import Home from "../views/Home/index.vue";

const routes = [
  { path: '/login', component: Login},
  { path: '/home', component: Home }
];

const router = new VueRouter({
  routes
});

export default router;