const engine = Matter.Engine.create();
const box = {
  w: 140,
  h: 80,
  body: Matter.Bodies.rectangle(150, 0, 140, 80),
  elem: document.querySelector("#box"),
  render() {
    const { x, y } = this.body.position;
    this.elem.style.top = `${y - this.h / 2}px`;
    this.elem.style.left = `${x - this.w / 2}px`;
    this.elem.style.transform = `rotate(${this.body.angle}rad)`;
  },
};
const ground = Matter.Bodies.rectangle(200, 200, 400, 120, { isStatic: true });
// Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
//   Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
//   Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
//   Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
const mouseConstraint = Matter.MouseConstraint.create(engine, {
  element: document.body,
});
Matter.Composite.add(engine.world, [box.body, ground, mouseConstraint]);
(function rerender() {
  box.render();
  Matter.Engine.update(engine);
  requestAnimationFrame(rerender);
})();
