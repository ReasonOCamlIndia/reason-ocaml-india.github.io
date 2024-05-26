---
slug: how-melange-works
title: "Meetup 5: High level overview of how Melange compiler works"
authors: [prometheansacrifice]
---

I lead this discussion. Here are the highlights.

### High-level overview of the compilers internal pipelines.

I created the following drawing with Figma to help visualise.

<a href="https://ocaml-internals.dining-philosophers.dev/docs/internal-pipelines">
  <img src="https://ocaml-internals.dining-philosophers.dev/img/ocaml-compiler-internal-pipelines.png" alt="OCaml compiler pipelines visualised" />
</a>

### Compiler commands to produce JS artifacts (without a build system).

We need a sandbox with `melange`, `reason` and `ocaml` compiler.

```json
{
  "dependencies": {
    "ocaml": "5.x",
    "@opam/reason": "*",
    "@opam/melange": "*",
    "@opam/ocaml-lsp-server": "*",
    "@opam/ocamlformat": "*",
    "@opam/ocamlformat-rpc": "*",
    "@opam/dot-merlin-reader": "*"
  }
}
```

Simple `hello.ml` with just one `print_endline` can be compiled with

```sh
esy melc ./hello.ml
```

If `Belt` is added to the `hello.ml`, path to melange libaries need to be included with `-I` flag

```sh
esy melc -I /Users/username/.esy/3__________________________________________________________________/i/opam__s__melange-opam__c__4.0.0-51-9d2a6c24/lib/melange/belt/melange ./hello.ml
```

To compile Reason files, `-pp refmt --print binar` is needed

```sh
esy melc -pp 'refmt --print binary' -impl hello.re -o hello.js
```

If a package were to be imported, then `ocamlfind` would be used to figure the include path

### How all this knowledge could be used to implement a webpack loader.

A webpack loader attempting this can be found [here](https://github.com/DiningPhilosophersCo/reason-loader)

This loader is used here on this website as a [docusaurus plugin](https://github.com/ReasonIndia/reason-bangalore.github.io/blob/e72a01bff73f221b36f7aba6d1d38ef7baf2c18c/plugins/docusaurus-webpack-plugin/index.js#L2)

## Next Meetup

Next, we use the webpack loader and continue working on the bare bones game demo [running here](/mdn-game-tutorial/). No prior knowledge needed other than basic HTML5 Canvas. Not even this meetup's discussion.


## Stay in touch with us 

Twitter: https://twitter.com/ReasonBangalore

Discord: https://discord.com/invite/RamP7SCKcU

