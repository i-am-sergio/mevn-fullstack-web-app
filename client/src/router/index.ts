import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/tasks",
    name: "tasks",
    component: () => import("@/components/TaskList.vue"),
  },
  {
    path: "/tasks/new",
    name: "task-new",
    component: () => import("@/components/TaskForm.vue"),
  },
  {
    path: "/tasks/:id",
    name: "task details",
    component: () => import("@/components/TaskDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
