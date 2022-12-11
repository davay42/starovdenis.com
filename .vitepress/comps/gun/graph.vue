<template lang="pug">
article
  .record(
    :style="{ backgroundColor: itemColor(i) }",
    v-for="(g, i) in graph",
    :key="i"
  )
    .key(@click="g.show = !g.show")
      .user(
        :style="{ backgroundColor: itemColor(i.slice(1, 88)) }",
        v-if="i[0] == '~'"
      ) {{ i.slice(1, 6) }}...
      .item {{ i[0] == '~' ? i.slice(88) : i }}
    transition(name="fade")
      section(v-if="g.show")
        .id {{ i }}
        .prop(v-for="(r, j) in g", :key="j", v-show="j != '_' && j != 'show'")
          .title {{ j }}
          .content {{ r }}
</template>

<script setup >
import { onBeforeUnmount, reactive, ref } from "vue";
import { gun } from "#/use/db";
import { itemColor } from "#/use/colors";

const graph = ref({});

const timer = setInterval(() => {
  graph.value = gun._.graph;
}, 500);

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.record {
  font-size: 12px;
  border: 1px solid #aaa;
  cursor: pointer;
}

.prop {
  padding: 0.5em;
}

.key {
  display: flex;
}

.user {
  padding: 0 1em;
}

.title {
  font-weight: bold;
}
</style>