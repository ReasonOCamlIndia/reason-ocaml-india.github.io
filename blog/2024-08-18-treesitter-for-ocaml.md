---
slug: tree-sitter-for-ocaml
title: "Meetup 16: Tree sitter for Reason and OCaml"
authors: [prometheansacrifice]
---

[@theteachr](https://github.com/KaranAhlawat) led the session explaining Tree sitter, how to write a grammar, debug tree-sitter-ocaml issies on helix. We even explored extending the Reason tree sitter grammar with a class definition. Here's the WIP snippet.


```diff
diff --git a/grammar.js b/grammar.js
index 9f587a4..7bc6748 100644
--- a/grammar.js
+++ b/grammar.js
@@ -56,6 +56,7 @@ module.exports = grammar(require("./embedded/ocaml"), {
         $.expression_statement,
         $.open_statement,
         $.module_definition,
+        $.class_definition,
         $.mutable_record_update,
       ),
 
@@ -71,6 +72,22 @@ module.exports = grammar(require("./embedded/ocaml"), {
         $._semicolon,
       ),
 
+    class_definition: ($) =>
+      seq(
+        "class",
+        // TODO optional($._attribute),
+        $.class_binding,
+        $._semicolon,
+      ),
+
+    class_binding: ($) =>
+      seq(
+        field("name", choice($._class_name, alias("_", $.class_name))),
+        // optional($._module_typed),
+        seq("=", field("body", $._module_expression)),
+        // repeat($.item_attribute),
+      ),
+
     module_binding: ($) =>
       seq(
         field("name", choice($._module_name, alias("_", $.module_name))),
```

## Next Meetup

Checkout [Upcoming Meetups](/upcoming-meetups)

## Stay in touch with us 

Twitter: https://x.com/ReasonBangalore

Discord: https://discord.com/invite/Ytr36fRC4C

