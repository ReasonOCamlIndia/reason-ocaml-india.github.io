type canvas;
type context2d;
type document;
type reactRef;

external document: document = "document";
[@mel.send]
external getElementById: (document, string) => canvas = "getElementById";
[@mel.send] external getContext: (canvas, string) => context2d = "getContext";
[@mel.get] external getWidth: canvas => int = "width";
[@mel.get] external getHeight: canvas => int = "height";
[@mel.get] external getCurrent: reactRef => canvas = "current";
[@mel.send]
external clearRect: (context2d, float, float, float, float) => unit =
  "clearRect";
[@mel.send] external beginPath: context2d => unit = "beginPath";
[@mel.send]
external arc: (context2d, float, float, float, float, float, bool) => unit =
  "arc";
[@mel.set] external setFillStyle: (context2d, string) => unit = "fillStyle";
[@mel.send] external fill: context2d => unit = "fill";
[@mel.send] external closePath: context2d => unit = "closePath";
external requestAnimationFrame: (unit => unit) => unit =
  "requestAnimationFrame";
