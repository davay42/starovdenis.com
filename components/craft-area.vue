<template lang="pug">
.my-8
  slot

  .text-2xl {{area?.title}}

  .my-6(v-for="craft in area?.crafts", :key="craft.title")

    .flex.py-2.items-center

      .flex-1.text-lg {{craft?.title}} {{craft?.icon}} 

      .text-md.text-right {{craft?.interest}}

    .flex.relative.bg-gray-100.rounded-full.items-center

      .flex-1.bg-lime-300.pl-2.rounded-full(:style="{maxWidth:craft.current/craft.total*100+'%'}") &nbsp;

      .absolute.right-1em {{craft.current}} / {{craft.total}}

    .text-sm.m-2 {{craft?.comment}}

    skill(v-for="skill in craft.skills", :key="skill.title", :skill="skill")
</template>

<script  setup>
const props = defineProps({
  area: Object,
});

</script>

<style lang="postcss" scoped>

</style>