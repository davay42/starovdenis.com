<template>
  <footer class="page-footer">
    <EditLink />
    <LastUpdated />
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.page-footer {
  @apply
    py-4 overflow-auto space-y-1
    lg:(flex space-between align-center space-y-0);
}
</style>
