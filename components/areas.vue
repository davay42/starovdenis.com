<template lang="pug">
.flex.flex-col
  
  craft-area(v-for="area in areas", :key="area.title", :area="area") 
   
</template>

<script setup>
import areas from '../skillset.yml'


</script>

<style lang="postcss" scoped>

</style>