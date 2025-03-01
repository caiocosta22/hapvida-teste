const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Home.vue") }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/CleanLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Login.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
