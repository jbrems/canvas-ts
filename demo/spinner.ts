// @ts-ignore
const canvas = globalThis.myCanvas;

canvas.title = 'Spinner';
canvas.icon = 'fa-solid fa-spinner';

let speed = 25;
let trail = 5;

canvas.onDraw(ctx => {
  // ctx.beginPath();
  // ctx.ellipse(canvas.width / 2, canvas.height / 2, canvas.height * 0.35, canvas.height * 0.35, 0, 0, Math.PI * 2);
  // ctx.stroke();

  for (let i = 0; i < trail; i++) {
    const x = Math.cos(canvas.frameCount * speed / 1000 - i * Math.PI / (10 + i * 0.5)) * (canvas.height * 0.35);
    const y = Math.sin(canvas.frameCount * speed / 1000 - i * Math.PI / (10 + i * 0.5)) * (canvas.height * 0.35);

    ctx.fillStyle = `rgba(${i * 25}, ${i * 25}, ${i * 25})`;
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 + x, canvas.height / 2 + y, canvas.height * 0.05 * (10 - i) * 0.1, canvas.height * 0.05 * (10 - i) * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
  }
});

canvas.setOptions([
  { name: 'speed', value: 25, min: 1, max: 100, step: 1 },
  { name: 'trail', value: 5, min: 1, max: 10, step: 1 },
]);

canvas.onUpdateOptions(options => {
  speed = options.speed;
  trail = options.trail;
});