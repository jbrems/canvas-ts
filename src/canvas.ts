export class Canvas {
  public frameCount = 0;
  public options: Object[] = [];
  public title: string;
  public icon: string;

  private _onUpdate: () => void;
  private _onDraw: (ctx: CanvasRenderingContext2D) => void;
  private _onUpdateOptions: (options: Object) => void;
  private loop: () => void;

  constructor(private canvasElement: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement, public readonly width = document.getElementById('content').clientWidth, public readonly height = document.getElementById('content').clientHeight) {
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.canvasElement.style.backgroundColor = 'white';

    this.startLoop();
  }

  public get context(): CanvasRenderingContext2D {
    return this.canvasElement.getContext('2d');
  }

  public onDraw(fn: (ctx: CanvasRenderingContext2D) => void) {
    this._onDraw = fn;
  }

  public onUpdate(fn: () => void): void {
    this._onUpdate = fn
  }

  public onUpdateOptions(fn: (options: Object) => void): void {
    this._onUpdateOptions = fn;
  }

  public setOptions(options: Object[]) {
    this.options = options;
  }

  public updateOptions(): void {
    this._onUpdateOptions(this.options.reduce((acc, option: { name: string, value: any }) => {
      acc[option.name] = option.value;
      return acc;
    }, {}));

    this.draw();
  }

  public pause(): void {
    this.loop = () => {};
  }

  public startLoop(): void {
    this.loop = () => {
      this._onUpdate && this._onUpdate();
      this.draw();
      this.frameCount++;
      requestAnimationFrame(this.loop);
    }
    requestAnimationFrame(this.loop);
  }

  private draw() {
    this.context.reset();
    this.context.clearRect(0, 0, this.width, this.height);
    this._onDraw(this.context);
  }
}