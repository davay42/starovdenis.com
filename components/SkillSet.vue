<script setup>
const props = defineProps({
  skillset: { type: Object, default: () => ({}) }
})
</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.leading-relaxed
  .p-4.bg-light-500.dark-bg-dark-500.shadow.flex.flex-col.gap-.rounded(style="flex: 1 1 220px" v-for="(list,field) in skillset" :key="field")
    .text-2xl {{ field }}
    .flex.flex-col
      .p-1.flex.gap-2.items-start.border-b-1.border-dark-100.dark-border-light-700.border-op-30.hover-border-op-100(v-for="skill in list" :key="skill") 
        //- .w-4.pt-6px
          .i-la-minus
        .p-0 {{ skill }}
</template>