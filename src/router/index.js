import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === "history" ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  return Router;
});

// Importações de Componentes
import Pesquisar from "src/components/Menu/Pesquisar.vue";
import Tabela from "src/components/Tabela/Tabela.vue";
import Inserir from "src/components/Menu/Inserir.vue";

export { Pesquisar, Tabela, Inserir };
