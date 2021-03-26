<template lang="pug">
.my-8
  slot

  .text-2xl {{area?.title}}

  my-craft(v-for="craft in area?.crafts", :key="craft.title", :craft="craft")

    
</template>

<script  setup>
const props = defineProps({
  area: Object,
});

</script>

<style lang="postcss" scoped>

</style>