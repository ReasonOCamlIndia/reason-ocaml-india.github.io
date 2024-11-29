open Document;

type canvas;
type context2d;
type reactRef;

[@mel.send] external getContext: (htmlElement, string) => context2d = "getContext";
[@mel.get] external getWidth: htmlElement => int = "width";
[@mel.get] external getHeight: htmlElement => int = "height";
[@mel.get] external getCurrent: reactRef => htmlElement = "current";
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
