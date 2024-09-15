import { createRouter, createWebHistory } from "@ionic/vue-router";

import HomePage from "../views/HomePage.vue";
import LoyaltyPoints from "../views/LoyaltyPoints.vue";
import OrderNow from "../views/OrderNow.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: "/loyaltyPage",
    name: 'Loyalty Page',
    component: LoyaltyPoints
  },
  {
    path: "/ordernow",
    name: 'Order Now',
    component: OrderNow
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
