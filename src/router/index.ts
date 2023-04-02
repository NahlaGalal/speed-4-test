import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favourite from "../views/Favourite.vue";
import Chats from "../views/Chats.vue";
import Chat from "../views/Chat.vue";
import Landing from "../views/Landing.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import PasswordCode from "../views/PasswordCode.vue";
import NewPassword from "../views/NewPassword.vue";
import ActivateAccount from "../views/ActivateAccount.vue";
import NotFound from "../views/NotFound.vue";
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
      path: "/favourites",
      name: "Favourites",
      component: Favourite,
      meta: { layout: LayoutVue },
    },
    {
      path: "/chats",
      name: "Chats",
      component: Chats,
      meta: { layout: LayoutVue },
    },
    {
      path: "/chat/:productId/:receiverId",
      name: "Chat page",
      component: Chat,
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
      path: "/password-code/:number",
      name: "Password code page",
      component: PasswordCode,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/new-password/:code/:phone",
      name: "New password page",
      component: NewPassword,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/activate/:number",
      name: "Activate account page",
      component: ActivateAccount,
      meta: { layout: AuthLayoutVue },
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
      meta: { layout: LayoutVue },
    },
  ],
});

export default router;
