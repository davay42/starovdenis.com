<template lang="pug">
.flex
  canvas.w-sm.h-sm(class="md:w-lg md:h-lg",ref="canvas", @click="setFigures()")
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as paper from 'paper'
const canvas = ref(null)
onMounted(()=> {
  paper.setup(canvas.value)
  setFigures()
  
});


function setFigures() {
  const layer = new paper.Layer({
    name:'circles'
  })
  let w = paper.view.bounds.width
  let h = paper.view.bounds.height
  const circles = []
  for (let i=0; i<Math.random()*12; i++) {
    let num = circles.length
    circles[num]=new paper.Shape.Circle({
      center:[Math.random()*w, Math.random()*h],
      radius: Math.random()*w/2,
      blendMode: 'lighten',
      fillColor: {
        hue: Math.random()*360,
        saturation: Math.random()*.2 + .8,
        brightness: Math.random()*.5 + .5,
        alpha: Math.random(),
      },
      opacity:0,
    })
    circles[num].tween(
      {opacity: 1, radius:Math.random()*w/4},
      { duration: 1000, easing: 'easeInOutQuad',}
      
    )
    circles[num].tween({
      position:[Math.random()*w,Math.random()*h],
      size: [Math.random()*30,Math.random()*60],
    }, {duration: Math.random()*10000, easing: 'easeInQuad'}).then(function(){
      
    })
    
  }
}


</script>

<style lang="stylus" scoped>

</style>