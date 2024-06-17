---
slug: html-canvas-continued-2
title: "Meetup 8: HTML5 Canvas game (continued)"
authors: [prometheansacrifice]
---

We planned to continue the HTML5 canvas tutorial from Mozilla Developer Network, but discussed some fundamentals on abstractions first.

### Abstractions that can break the OCaml typechecker

Patatruder shared the following cool snippet

```ocaml
let f1 x f = f x x
let f2 x = f1 (f1 x)
let f3 x = f2 (f2 x)
let f4 x = f3 (f3 x)
let f5 x = f4 (f4 x)
let f6 x = f5 (f5 x)
```

### Abstractions that turn functions into lego blocks

As we started with the tutorial, we ran into the `option` type. Some of us were immediately reminded of monads. We decided to digress and revisit the topic. Here' what came out of it. (Thank you, Patatruder for the snippet).

```ocaml
let ( let* ) = Result.bind
let ( and* ) r1 r2 =
  match r1, r2 with
  | Ok r1, Ok r2 -> Ok (r1, r2)
  | Error e, _ | _, Error e -> Error e

let split s =
  match String.split_on_char ' ' s with
  | [first; second] -> Ok (first, second)
  | _ -> Error ["split"]

let single_convertion = function
  | "one" -> Ok 1
  | "two" -> Ok 2
  | "three" -> Ok 3
  | "four" -> Ok 4
  | "five" -> Ok 5
  | "six" -> Ok 6
  | "seven" -> Ok 7
  | "eight" -> Ok 8
  | "nine" -> Ok 9
  | "zero" -> Ok 0
  | _ -> Error ["single_convertion"]

let catch cause result = Result.map_error (List.cons cause) result

let int_convertion (first, second) =
  let result =
    let* f = single_convertion first
    and* s = single_convertion second in
    Ok (f, s) in
  catch "int_convertion" result

let division (a, b) =
  if b = 0 || a mod b <> 0 then Error ["division"]
  else Ok (a / b)

let add (x, y) = x + y

let pipeline s =
  let result =
    let* split = split s in
    let* converted = int_convertion split in
    let* divided = division converted in
    let result = add (divided, 6) in
    Ok result in
  catch "pipeline" result

let result = pipeline "ninea eightt no"
```

Join us on Discord if you'd like to learn more about these examples.

---

We discussed package managers and dev tooling post the session.

## Next Meetup
We learn how to style our server rendered React components (with a server implementation that doesn't need Node.js).
Learn more about it [here](/upcoming-meetups/#learning-reason-and-ocaml-css-styling-the-server-rendered-react-components)

## Stay in touch with us 

Twitter: https://x.com/ReasonBangalore

Discord: https://discord.com/invite/Ytr36fRC4C

