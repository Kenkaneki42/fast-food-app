import { createRouter, createWebHistory } from "@ionic/vue-router";

import HomePage from "../views/HomePage.vue";
import LoyaltyPoints from "../views/LoyaltyPoints.vue";
import OrderNow from "../views/OrderNow.vue";
import AddToBag from "../views/AddToBag.vue";
import CheckOut from "../views/CheckOut.vue";
import OrderReceived from "../views/OrderReceived.vue";

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
  {
    path: "/addToBag",
    name: "Selected Order",
    component: AddToBag
  },
  {
    path: "/checkOut",
    name: "Check Out Order",
    component: CheckOut
  },
  {
    path: "/orderConfirmation",
    name: "Order Confirmed",
    component: OrderReceived
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
