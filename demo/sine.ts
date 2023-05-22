// @ts-ignore
const canvas = globalThis.myCanvas;

canvas.title = 'Sine wave';
canvas.icon = 'fa-solid fa-wave-square';

let frequency = 0.01;

canvas.onDraw(ctx => {
  const size = canvas.height / 3;

  let previousPoint;

  for (let x = 0; x < canvas.width / 2; x++) {
    const y = Math.sin((x + canvas.frameCount)  * frequency) * size + (canvas.height / 2);

    ctx.strokeStyle = 'black';

    if (previousPoint) {
      ctx.beginPath();
      ctx.moveTo(previousPoint.x, previousPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    previousPoint = { x, y };
  }
});

canvas.setOptions([
  { name: 'frequency', value: frequency, min: 0.001, max: 0.25, step: 0.001 },
]);

canvas.onUpdateOptions(options => {
   frequency = options.frequency;
});