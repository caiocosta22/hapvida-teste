<script setup>
</script>

<template lang="pug">
q-layout.pagina(
  view="hHh lpr fff"
)
  q-page-container.container
    router-view
</template>

<style scoped>
.pagina{
  height: 100vh;
}

.container {
  margin: 0 auto;
  height: 100%;
}

</style>
