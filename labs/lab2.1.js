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
    background: "white",
    wireframes: false,
  },
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies

var door = Bodies.rectangle(200, 20, 400, 90, {
  render: {
    sprite: {
      texture: "../assets/ruler.jpg",
      xScale: 0.44,
      yScale: 0.78,
    },
  },
});
var book = Bodies.rectangle(600, 200, 100, 300, {
  isStatic: true,
});

Composite.add(world, [
  // walls
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  door,
  book,
]);

function change() {
  Composite.remove(engine.world, book);
  book = Bodies.rectangle(600, 200, 50, 300, {
    isStatic: true,
  });
  Composite.add(world, book);
}
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
