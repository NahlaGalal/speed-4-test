import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import LayoutVue from "../components/Layout/Layout.vue";
import AuthLayoutVue from "../components/AuthLayout/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { layout: LayoutVue },
    },
    {
      path: "/landing",
      name: "Landing page",
      component: Landing,
      meta: { layout: AuthLayoutVue },
    },
  ],
});

export default router;
