// @ts-ignore
const canvas = globalThis.myCanvas;

canvas.title = 'Spinner';
canvas.icon = 'fa-solid fa-spinner';

let speed = 25;
let trail = 5;

canvas.onDraw(ctx => {
  ctx.translate(canvas.width / 2, canvas.height / 2);

  const size = Math.min(canvas.width, canvas.height) * 0.35;

  for (let i = 0; i < trail; i++) {
    const x = Math.cos(canvas.frameCount * speed / 1000 - i * Math.PI / (10 + i * 0.5)) * size;
    const y = Math.sin(canvas.frameCount * speed / 1000 - i * Math.PI / (10 + i * 0.5)) * size;

    ctx.fillStyle = `rgba(${i * 20}, ${i * 20}, ${i * 20})`;
    ctx.beginPath();
    ctx.ellipse(x, y, canvas.height * 0.05 * (10 - i) * 0.1, canvas.height * 0.05 * (10 - i) * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
  }
});

canvas.setOptions([
  { name: 'speed', value: 25, min: 0, max: 100, step: 1 },
  { name: 'trail', value: 5, min: 0, max: 10, step: 1 },
]);

canvas.onUpdateOptions(options => {
  speed = options.speed;
  trail = options.trail;
});