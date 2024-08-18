---
slug: monopoly-in-ocaml-4
title: "Meetup 15: Monopoly in OCaml continued - part 4"
authors: [prometheansacrifice]
---

[@theteachr](https://github.com/theteachr) showed us the new game loop using `Seq.of_dispenser` making the game loop look like this.


```ocaml
let () =
  let game =
    [ "ocaml"; "reason"; "melange"; "dune" ]
    |> List.map Player.make
    |> Game.start
  in
  read_command
  |> Seq.of_dispenser
  |> Seq.filter_map Command.parse
  |> Seq.scan Command.exec game
  |> Seq.take_while Game.is_not_over
  |> Seq.iter Tui.draw
```

**Highlights**

We discussed,
1. Possible use of GADTs for handling propert card transformations. You can find the git branch [here](https://github.com/theteachr/fortune/tree/gadt-property)
2. use of `Seq.unfold`. [Code](https://github.com/theteachr/fortune/tree/unfold)
3. Modular card transformations. [Code](https://github.com/theteachr/fortune/tree/property-modules)



## Next Meetup

Checkout [Upcoming Meetups](/upcoming-meetups)

## Stay in touch with us 

Twitter: https://x.com/ReasonBangalore

Discord: https://discord.com/invite/Ytr36fRC4C

