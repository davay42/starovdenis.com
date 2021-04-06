<template>
  <div class="w-full h-xl">
    <Renderer
      class="absolute left-0 top-0"
      ref="renderer"
      :alpha="true"
      :shadow="true"
      :orbit-ctrl="{ autoRotate: false, enableDamping: true, dampingFactor: 0.05 }"
      resize="window"
      :antialias="true"
    >
      <Camera :position="{ z: 10 }"></Camera>
      <Scene>
        <AmbientLight color="hsla(40,30%,60%,1)" :intensity="0.5"></AmbientLight>
        <PointLight
          ref="light"
          :position="{ x: 0, y: 20, z: 10 }"
          cast-shadow
          :shadow-map-size="{ width: 1024, height: 1024 }"
        ></PointLight>
        <sphere ref="bulb" :position="{ x: 0, y: 20, z: 10 }">
          <toon-material></toon-material>
        </sphere>
        <Plane
          :position="{ x: 0, y: -10, z: 0 }"
          :rotation="{ x: - Math.PI / 2 }"
          :width="3000"
          :height="3000"
          receive-shadow
        >
          <PhongMaterial color="#f80" />
        </Plane>
        <Icosahedron
          ref="box"
          :rotation="{ y: Math.PI / 3, z: Math.PI / 4 }"
          :position="{ x: 0, y: 2, z: 0 }"
          cast-shadow
        >
          <PhongMaterial color="#f80" />
        </Icosahedron>
        <Cone
          v-for="i in 3"
          ref="cone"
          :radial-segments="12"
          :position="{ x: (i - 2) * 10, y: -4, z: -20 }"
          :scale="{ x: 4, y: 20, z: 4 }"
          cast-shadow
          receive-shadow
        >
          <PhongMaterial color="#848" />
        </Cone>
      </Scene>
    </Renderer>
  </div>
</template>

<script>

export default {
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    const cone = this.$refs.cone.mesh
    const light = this.$refs.light.light
    const bulb = this.$refs.bulb.mesh
    let t = 0
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
      cone.rotation.y += 0.001
      t += 0.01
      light.position.y = bulb.position.y = Math.sin(t) * 10 + 2

    });
  },
};

</script>

<style lang="stylus" scoped>

</style>