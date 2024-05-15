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

// var door = Bodies.rectangle(200, 20, 400, 90, {
//   render: {
//     sprite: {
//       texture: "../assets/ruler.jpg",
//       xScale: 0.44,
//       yScale: 0.78,
//     },
//   },
// });
var book = Bodies.rectangle(600, 200, 200, 300, {
  // isStatic: true,
  render: {
    sprite: {
      texture: "../assets/bookFront.jpg",
      xScale: 0.45,
      yScale: 0.5,
    },
  },
});

Composite.add(world, [
  // walls
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  // door,
  book,
]);

let bookRotate = 0;
function change() {
  Composite.remove(engine.world, book);
  if (bookRotate % 2 == 0) {
    book = Bodies.rectangle(600, 200, 40, 300, {
      // isStatic: true,
      render: {
        sprite: {
          texture: "../assets/bookSlide.jpg",
          xScale: 1.4,
          yScale: 0.5,
        },
      },
    });
  } else {
    book = Bodies.rectangle(600, 200, 200, 300, {
      // isStatic: true,
      render: {
        sprite: {
          texture: "../assets/bookFront.jpg",
          xScale: 0.45,
          yScale: 0.5,
        },
      },
    });
  }
  bookRotate++;
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
