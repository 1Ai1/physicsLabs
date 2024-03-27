var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
  world = engine.world;

// create renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
var stack = Composites.stack(
  100,
  600 - 21 - 20 * 20,
  5,
  1,
  20,
  0,
  function (x, y) {
    return Bodies.circle(x, y, 20);
  }
);
const box = {
  w: 140,
  h: 80,
  body: Matter.Bodies.rectangle(150, 0, 140, 80),
  elem: document.querySelector("#box"),
};

Composite.add(world, [
  // walls
  box.body,
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  stack,
]);
// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);
(function rerender() {
  box.render();
  Matter.Engine.update(engine);
  requestAnimationFrame(rerender);
})();
