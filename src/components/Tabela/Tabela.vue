<script setup>
import { ref } from "vue";

const columns = ref([
  {
    name: "name",
    required: true,
    label: "Nome",
    align: "left",
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: "calories", align: "center", label: "ID", field: "calories", sortable: true },
  { name: "fat", label: "Nascimento", field: "fat", sortable: true },
  { name: "carbs", label: "Setor", field: "carbs" },
  { name: "protein", label: "Ingressão", field: "protein" },
  { name: "sodium", label: "Saída", field: "sodium" },
  { name: "calcium", label: "Cargo", field: "calcium", sortable: true },
  { name: "iron", label: "Sede", field: "iron", sortable: true }
]);

const rows = ref([
  {
    name: "Caio",
    calories: 159,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Matheus",
    calories: 237,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Vinicius",
    calories: 262,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Eduardo",
    calories: 305,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Func",
    calories: 356,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Func",
    calories: 375,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Func",
    calories: 392,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Func",
    calories: 408,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Func",
    calories: 452,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  },
  {
    name: "Func",
    calories: 518,
    fat: "10/01/2002",
    carbs: "T.I",
    protein: "05/09/2024",
    sodium: "nunca",
    calcium: "Analista",
    iron: "Fátima"
  }
]);

</script>

<template lang="pug">
div.container
  q-table(
    title="Quadro Geral"
    :rows="rows"
    :columns="columns"
    row-key="name"
    separator="cell"
    flat bordered
    table-header-class="bg-secondary"
    card-class="background-table"
  )
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
}

.background-table {
  background-color: #fff;
  border-radius: 0px;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
