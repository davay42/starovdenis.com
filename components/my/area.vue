<template lang="pug">
.my-8 
  my-craft(v-for="craft in area?.crafts", :key="craft.title", :craft="craft",v-motion-fade)
</template>

<script  setup>
const props = defineProps({
  area: Object,
});

</script>

<style lang="postcss" scoped>
</style>