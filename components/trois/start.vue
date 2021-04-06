<template lang="pug">
Renderer(ref="renderer", width="600", height="700", :antialias="true")
  Camera(:position="{ z: 12 }")
  Scene
    PointLight(:position="{ y: 50, z: 50 }")
    Box(ref="box" :rotation="{ y: Math.PI / 3, z: Math.PI / 4 }")
      LambertMaterial
</template>

<script>

export default {
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
    });
  },
};

</script>

<style lang="stylus" scoped>

</style>