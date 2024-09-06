<script setup>
import { ref, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { Pesquisar, Tabela, Inserir } from "src/router/index.js";
import { useMenuStore } from "src/stores/menu-store.js";

const router = useRouter();

const $q = useQuasar();
const loginSalvo = $q.localStorage.getItem("login");
const senhaSalva = $q.localStorage.getItem("senha");

const menuStore = useMenuStore();
const menuAtual = computed(() => { return menuStore.menuAtual; });

onMounted(() => {
  if (loginSalvo && senhaSalva) {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "check",
      message: `Bem vindo! ${loginSalvo}`
    });
  } else {
    router.push("/login");
  }
});

</script>

<template lang="pug">
section.principal
  template(
    v-if="menuAtual === 2"
  )
    Pesquisar
  template(
    v-if="menuAtual === 1"
  )
    Tabela
  template(
    v-if="menuAtual === 3"
  )
    Inserir
</template>

<style scoped>

</style>
