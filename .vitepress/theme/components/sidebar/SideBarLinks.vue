<template lang="pug">
ul.sidebar-links(v-if="items.length > 0")
  SideBarLink(v-for="item of items" :key="item.text" :item="item")
</template>

<script setup lang="ts">
import { useSideBar } from '../../composables/sideBar'
import { SideBarLink } from './SideBarLink'

const items = useSideBar()
</script>

