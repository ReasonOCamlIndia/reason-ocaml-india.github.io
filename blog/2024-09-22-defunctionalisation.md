---
slug: defunctionalisation
title: "Article: Defunctionalisation"
authors: [prometheansacrifice, injuly]
---

[injuly](https://injuly.in) proposed a talk on defunctionalisation in compilers - this
rehashes his post
[defunctionalisation](https://injuly.in/blog/defunct/), but in
OCaml. We recommend you read his post first and switch to this article
to compare the OCaml implementation.

## Higher order functions

```ocaml
let rec fold f acc = function
| [] -> acc
| x::xs -> f x (fold f acc xs)

let sum xs = fold (+) 0 xs
let add n xs = fold (fun x acc -> (x + n)::acc) [] xs
```

`fold` is the higher order function because it takes another function
(possibly higher order), `f`.


## The GADT representation of functions like function arguments

```ocaml
type ('env, 'params, 'return) arrow =
  | FnPlus : int * int -> (unit, (int * int), int) arrow
  | FnPlusCons : int * (int * int list) -> (int, (int * int list), int list) arrow
```

`('env, 'params, 'return) arrow` encodes functions that can be passed
around as arguments to other functions.

`fold (+) 0 xs` could be expressed as `fold (FnPlus (0, xs))`
`fold (fun x acc -> (x + n :: acc)` could be expressed as `fold (FnPlusCons (n, (x, acc))`
where `n` is the free variable.

These representations can be evaluated with `apply`

```ocaml
let apply : type env params return.  (env, params, return) arrow -> return = fun arrow ->
  match arrow with
  | FnPlus (a, b)  -> a + b
  | FnPlusCons (n, (x, xs)) -> (n + x)::xs
```

Example output

```
utop[41]> apply (FnPlus (1, 2));;
- : int = 3
utop[42]> apply (FnPlusCons (10, (1, [2;3])));;
- : int args = [11; 2; 3]
utop[43]> 
```

## When is the next meetup?

Checkout [Upcoming Meetups](/upcoming-meetups)

## Stay in touch with us 

Twitter: https://x.com/ReasonBangalore

Discord: https://discord.com/invite/Ytr36fRC4C

