<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Lista from "src/components/Menu/Lista.vue";

const router = useRouter();
const drawer = ref(true);

const goToLogin = () => {
  router.push("/Login");
};
</script>

<template lang="pug">
q-layout.pagina(
  view="hHh lpR fff"
)
  q-header.header
    q-toolbar
      q-btn(
        dense
        flat
        round
        icon="menu" @click="drawer=!drawer"
      )
      q-toolbar-title
        q-avatar.q-mr-sm
          img(
            src="/images/hapvidaicon.png"
          )
        span(
          style=";font-weight:700"
        ) Quadro de Funcionários
      q-icon.q-mr-md(
        name="fa-solid fa-user"
        size="sm"
        class="cursor-pointer"
        @click="goToLogin()"
      )
      q-drawer(
        v-model="drawer"
        side="left"
        overlay
        bordered
        style="background-color:var(--black-light)"
      )
        Lista
  q-page-container.container
    router-view
</template>

<style scoped>
.pagina {
  height: 100vh;
  background-color: var(--grey-light);
}

.container {
  margin: 0 auto;
  max-width: 1240px;
  height: 90%;
}

.header {
  margin: 0 auto;
  padding: 20px 0px;
}

</style>
