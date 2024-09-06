<script setup>
import { ref } from "vue";

const func = ref();
const select = ref(null);
const option = ref([
  "1", "2", "3", "4", "5", "6"
]);
</script>

<template lang="pug">
div.container
  div.box
    h3 Pesquisar funcionário por nome
    q-input(
      outlined
      style="background:var(--grey-light)"
      v-model="func"
    )
    q-btn(
      color="info"
      style="width:100px"
    ) pesquisar
  q-separator
  div.box
    h3 Filtre por xxxx
    div.grid
      div(
        v-for="n in 12"
        :key="n"
      )
        p Filtro
        q-select(
          outlined
          style="background:var(--grey-light)"
          v-model="select"
          :options="option"
          label="teste"
        )
    q-btn(
      color="info"
      style="width:100px"
    ) pesquisar
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

p{
  margin-bottom: 10px;
}
</style>
