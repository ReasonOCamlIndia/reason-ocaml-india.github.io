open Bindings;

/* Bindings to external JavaScript APIs */
let ballRadius = 10;
/* The main render function */
let rec render = (canvasRef: reactRef, x, dx, y, dy) => {
  let canvas = getCurrent(canvasRef);
  let ctx = getContext(canvas, "2d");
  let square = x => x * x;
  let sum_sq = [1, 2, 3]->(Belt.List.map(square));
  Js.log(sum_sq);

  print_endline("hey");
  let width = float_of_int(getWidth(canvas));
  let height = float_of_int(getHeight(canvas));

  /* Clear the canvas */
  ctx->clearRect(0., 0., width, height);

  /* Draw the ball */
  beginPath(ctx);
  ctx->arc(
    x +. dx,
    y +. dy,
    float_of_int(ballRadius),
    0.,
    2. *. Float.pi,
    false,
  );
  setFillStyle(ctx, "green");
  fill(ctx);
  closePath(ctx);

  /* Boundary detection and update positions */
  let newDx =
    if (x
        +. dx > width
        -. float_of_int(ballRadius)
        || x
        +. dx < float_of_int(ballRadius)) {
      -. dx;
    } else {
      dx;
    };
  let newDy =
    if (y
        +. dy > height
        -. float_of_int(ballRadius)
        || y
        +. dy < float_of_int(ballRadius)) {
      -. dy;
    } else {
      dy;
    };

  /* Request next animation frame */
  requestAnimationFrame(() =>
    render(canvasRef, x +. newDx, newDx, y +. newDy, newDy)
  );
};
