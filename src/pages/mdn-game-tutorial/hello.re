type canvas;
type context2d;
type document;
type reactRef;

/* Bindings to external JavaScript APIs */
external document: document = "document";
[@mel.send] external getElementById: (document, string) => canvas = "getElementById";
[@mel.send] external getContext: (canvas, string) => context2d = "getContext";
[@mel.get] external getWidth: canvas => int = "width";
[@mel.get] external getHeight: canvas => int = "height";
[@mel.get] external getCurrent: reactRef => canvas = "current";
[@mel.send] external clearRect: (context2d, float, float, float, float) => unit = "clearRect";
[@mel.send] external beginPath: context2d => unit = "beginPath";
[@mel.send] external arc: (context2d, float, float, float, float, float, bool) => unit = "arc";
[@mel.set] external setFillStyle: (context2d, string) => unit = "fillStyle";
[@mel.send] external fill: context2d => unit = "fill";
[@mel.send] external closePath: context2d => unit = "closePath";
external requestAnimationFrame: (unit => unit) => unit = "requestAnimationFrame";

let ballRadius = 10;
/* The main render function */
let rec render = (canvasRef: reactRef, x, dx, y, dy) => {
  let canvas = getCurrent(canvasRef);
  let ctx = getContext(canvas, "2d");

  let width = float_of_int(getWidth(canvas));
  let height = float_of_int(getHeight(canvas));

  /* Clear the canvas */
  ctx->clearRect(0., 0., width, height);

  /* Draw the ball */
  beginPath(ctx);
  ctx->arc(x +. dx, y +. dy, float_of_int(ballRadius), 0., 2. *. Float.pi, false);
  setFillStyle(ctx, "green");
  fill(ctx);
  closePath(ctx);

  /* Boundary detection and update positions */
  let newDx = if (x +. dx > width -. float_of_int(ballRadius) || x +. dx < float_of_int(ballRadius)) { -.dx } else { dx };
  let newDy = if (y +. dy > height -. float_of_int(ballRadius) || y +. dy < float_of_int(ballRadius)) { -.dy } else { dy };

  /* Request next animation frame */
  requestAnimationFrame(() => render(canvasRef, x +. newDx, newDx, y +. newDy, newDy));
};

