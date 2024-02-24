<script setup>
import { ref, onMounted } from 'vue';
import Matter from 'matter-js';

const { Engine, Render, Runner, Mouse, Bodies, Composite, MouseConstraint } = Matter

const canvas = ref(null);

onMounted(() => {

  const engine = Engine.create();
  const render = Render.create({
    element: canvas.value,
    engine: engine,
    options: {
      width: 400,
      height: 400,
      wireframes: false,
      showVelocity: true,
      background: 'transparent',
    },
  });

  Render.run(render);

  var boxA = Bodies.rectangle(40, 20, 8, 8, { frictionAir: 0.001 });
  var boxB = Bodies.rectangle(40, 5, 8, 8, { frictionAir: 0.01 });

  let ground = Bodies.rectangle(0, 90, 200, 10, { isStatic: true });
  let wall1 = Bodies.rectangle(-100, 0, 10, 200, { isStatic: true });

  Composite.add(engine.world, [boxA, boxB, ground, wall1]);

  let mouse = Mouse.create(render.canvas)
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  Composite.add(engine.world, mouseConstraint);
  render.mouse = mouse;

  Render.lookAt(render, {
    min: { x: -100, y: -100 },
    max: { x: 100, y: 100 }
  });


  var runner = Runner.create();

  Runner.run(runner, engine);


});

</script>

<template lang="pug">
.p-0.overflow-hidden(ref="canvas")
</template>

