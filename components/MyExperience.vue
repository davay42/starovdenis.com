<script setup>
const props = defineProps({
  list: { type: Array, default: () => ([]) }
})

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4
  .p-4.shadow-md.bg-light-500.dark-bg-dark-400.flex.flex-col.gap-2.rounded(
    style="flex: 1 1 280px"
    v-for="exp in list" :key="exp")
    .flex.op-60 {{ exp?.start }} &mdash; {{ exp?.end }}
    .text-2xl.mr-2 {{ exp?.position }}

    a.text-lg(:href="exp?.company_url" target="_blank" v-if="exp?.company_url") {{ exp?.company }}
    .text-lg(v-else) {{ exp?.company }}

    .text-lg.italic.op-80 {{ exp?.title }}
    .text-md {{ exp?.description }}
    //- .font-bold.text-lg Skillset
    .flex.flex-col.gap-1
      .border-b-1.border-dark-400.border-op-20.dark-border-light-300.border-op-50(v-for="skill in exp?.skills" :key="skill") {{ skill }}
</template>