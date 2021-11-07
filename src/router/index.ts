import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ThankYou from "../views/ThankYou.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/stops/:stopId",
    name: "Stop",
    component: () =>
      import(/* webpackChunkName: "singleStop" */ "../views/Stop.vue"),
  },
  {
    path: "/stops/:stopId/process",
    name: "Process",
    component: () =>
      import(
        /* webpackChunkName: "singleStopProcess" */ "../views/StopProcess.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
