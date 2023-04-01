import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import PasswordCode from "../views/PasswordCode.vue";
import NewPassword from "../views/NewPassword.vue";
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
    {
      path: "/register",
      name: "Signup page",
      component: Signup,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/login",
      name: "Login page",
      component: Login,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/forget-password",
      name: "Forget password page",
      component: ForgetPassword,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/password-code",
      name: "Password code page",
      component: PasswordCode,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/new-password",
      name: "New password page",
      component: NewPassword,
      meta: { layout: AuthLayoutVue },
    },
  ],
});

export default router;
