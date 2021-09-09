<template lang="pug">
p GUN
</template>

<script setup>
import { sea, gun } from '@use/db'

gun.get('time').get('now').set(Date.now())

gun.get('time').get('now').map().on((t, d) => {
  console.log(t, d)
})
</script>

<style scoped>
</style>