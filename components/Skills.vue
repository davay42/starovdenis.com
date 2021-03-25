<template lang="pug">
.flex.flex-col
  .my-8(v-for="area in areas", :key="area.title")
    .text-2xl {{area?.title}}

    .my-6(v-for="skill in area.skills", :key="skill.title")
      .flex.py-2.items-center
        .flex-1.text-lg {{skill?.title}} {{skill?.icon}} 
        .text-md.text-right {{skill?.status}}

      .flex.relative.bg-gray-100.rounded-full.items-center
        .flex-1.bg-lime-300.pl-2.rounded-full(:style="{maxWidth:skill.current/skill.total*100+'%'}") &nbsp;
        .absolute.right-1em {{skill.current}} / {{skill.total}}
      .text-sm.my-2 {{skill?.comment}}
  .mt-8 {{areas}}
</template>

<script setup>
import areas from '../skillset.yml'

</script>

<style lang="postcss" scoped>

</style>