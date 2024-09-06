<script setup>
import { ref } from "vue";

const user = ref();
</script>

<template lang="pug">
section.container
  h3 Preencha os dados abaixo
  div.grid
    div.flex.column
      p Nome
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
    div.flex.column
      p Nascimento
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
    div.flex.column
      p Setor
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
    div.flex.column
      p Unidade
      q-select(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
    div.flex.column
      p Admissão
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
        type="date"
      )
    div.flex.column
      p Saída
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
        type="date"
      )
    div.flex.column
      p Cargo
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
    div.flex.column
      p Matricula
      q-input(
        outlined
        style="background:var(--grey-light)"
        v-model="user"
      )
  q-btn(
    color="info"
    style="width:100px"
  )
    span Cadastrar
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
}
</style>
