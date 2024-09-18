---
slug: bootstrapping-ocaml-projects
title: "Meetup 19: Bootstrapping OCaml projects without package manager"
authors: [prometheansacrifice]
---

We discussed what's needed by the package manager to make it's project bootstrap without itself.

Notably,

1. Trace the complete transitive closure of the dependencies - so
package manager must build such dependencies in isolation to catching
missing dependencies.

2. Trace the complete build environment variables

3. A parser for `.install` files that ocaml build systems create to
   install built artifacts

A PoC with esy package manager can be found [here](https://github.com/ManasJayanth/esy-boot)

Checkout [Upcoming Meetups](/upcoming-meetups)

## Stay in touch with us 

Twitter: https://x.com/ReasonBangalore

Discord: https://discord.com/invite/Ytr36fRC4C

