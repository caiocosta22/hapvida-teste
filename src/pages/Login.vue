<script setup>
import Login from "src/components/Login/Login.vue";
</script>

<template lang="pug">
section.principal
  div.banner
  Login
</template>

<style scoped>
.principal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/callcenter.jpg");
  background-position: center;
  background-size: cover;
}
</style>
