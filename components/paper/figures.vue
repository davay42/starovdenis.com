<template lang="pug">
.flex.flex-col 
  .text-2xl.z-2 HELLO
  canvas.z-1.absolute.top-0.left-0.right-0.w-full.h-full(ref="canvas", data-paper-resize="true", @click="setFigures()")
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