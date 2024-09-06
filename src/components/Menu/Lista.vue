<script setup>
import { ref } from "vue";

import { useMenuStore } from "src/stores/menu-store.js";

const menuStore = useMenuStore();

const menus = ref([
  {
    nome: "Pesquisar",
    icon: "fa-solid fa-magnifying-glass",
    id: 2,
    isAtivo: false
  },
  {
    nome: "Início",
    icon: "fa-solid fa-house",
    isAtivo: true,
    id: 1
  },
  {
    nome: "Criar",
    icon: "fa-solid fa-plus",
    isAtivo: false,
    id: 3
  }
]);

const ativaMenu = (objeto) => {
  menus.value.forEach((menu) => {
    menu.nome !== objeto.nome ? menu.isAtivo = false : menu.isAtivo = true;
    menuStore.setMenuAtual(objeto.id);
  });
};
</script>

<template lang="pug">
div.perfil
  q-avatar(
    size="72px"
  )
    img(
      src="/images/caiopc.jpeg"
    )
  span.subtitulo Caio Costa
q-item(
  v-for="menu in menus"
  :key="menu"
  clickable
  v-close-popup
  @click="ativaMenu(menu)"
)
  q-item-section
    div.item
      q-icon(
        :name="menu.icon"
      )
      p {{ menu.nome }}
</template>

<style scoped>
.item {
  display: flex;
  gap: 10px;
  flex: 1;
  align-items: center;
  padding: 10px;
}

p {
  font-size: 1rem;
  padding: 0px;
  margin: 0px;
}

.perfil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 20px 0px;
}
</style>
