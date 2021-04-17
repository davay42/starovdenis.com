<template lang="pug">
.text-sm.rounded-full.py-1.px-2.flex.items-center
  mdi-watering-can.mr-1.opacity-50
  .flex-1 {{ elapsed }}
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import TimeAgo from 'javascript-time-ago'

const props = defineProps({
  date: String,
});

const timeAgo = new TimeAgo('ru-RU')
const elapsed = computed(() => {
  return timeAgo.format(new Date(props.date))
})
</script>

<style lang="stylus" scoped>

</style>