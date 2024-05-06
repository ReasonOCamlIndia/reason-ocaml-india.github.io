---
slug: meetup-2-and-ann-next-meetup
title: "Meetup 2: Live coding a web server with OCaml and what's next"
authors: [prometheansacrifice]
---

We wrote a Dream web server with a hello world route - ie. you `curl` and get the string `“hello, world”` from the `“/“` endpoint. We started from scratch, empty directory even, and worked our way up. We intend to continue this series, so if you like to catch we what we have so far, here’s what we did so far.  We,

1. Created a `package.json` to install a local compiler and build system ( Dune ). 
2. Initialised a project with `dune init proj reason_ocaml_dev`. 
3. Ran the hello world setup by Dune for us with the `dune exec` command.
4. Installed `ocaml-lsp-server`, `ocamlformat` and `reason` syntax extension
5. Referred to https://github.com/ManasJayanth/fullstack-reason-react-demo and wrote the first Dream route (I had never written one before). Made mistakes, saw type errors in action, fixed and for the hello world Dream web server to work.

We have two talk proposals for next meetup, either,

1. @shaktimaan introduce us to some more Dream fundamentals and  help us understand @ocaml_orgs website.
2. Kaushik Hatti will show us getting started with Ocsigen so we can compare notes/experience.

So, we’re meeting up (online) again this Sunday. At 2pm IST.  

## Code

You can find the code we wrote so far on our [Github org](https://github.com/ReasonIndia/dream-web-server-sessions). You can reach out me on X at [@ManasJayanth](https://twitter.com/ManasJayanth) if you have any trouble.

## Stay in touch with us 

Twitter: https://twitter.com/ReasonBangalore

Discord: https://discord.com/invite/RamP7SCKcU
