var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;
Body = Matter.Body;

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
    background: "#ffffff",
    wireframes: false,
  },
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

var cherries = Matter.Vertices.fromPath(
  "4632.90610302337 1606.48993231831 4635.85388558808 1629.72020113174 4658.26438664809 1720.00156837195 4718.04538647838 1741.99874750627 4838.3844299161 1742.78983467671 4906.11559040485 1741.02063607217 4928.22341771857 1664.33395523638 4864.19268876427 1609.42015896159 4759.94170930749 1534.46422052224"
);

Composite.add(world, [
  // walls
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  Bodies.circle(400, 300, 20, { isStatic: true }),
]);

Composite.add(
  world,
  Bodies.fromVertices(100, 200, cherries, {
    density: 0.000008,
    frictionAir: 0.006,
    restitution: 0.3,
    friction: 0.01,
  })
);
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
