// Generated by Melange

import * as Caml from "melange.js/caml.js";
import * as Caml_format from "melange.js/caml_format.js";
import * as Caml_hash from "melange.js/caml_hash.js";
import * as Caml_js_exceptions from "melange.js/caml_js_exceptions.js";
import * as Stdlib from "./stdlib.js";
import * as Stdlib__Sys from "./sys.js";

function succ(n) {
  return n + 1 | 0;
}

function pred(n) {
  return n - 1 | 0;
}

function abs(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n | 0;
  }
}

function lognot(n) {
  return n ^ -1;
}

var unsigned_to_int;

if (Stdlib__Sys.word_size !== 32) {
  if (Stdlib__Sys.word_size !== 64) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/stdlib/int32.ml",
            69,
            6
          ],
          Error: new Error()
        };
  }
  unsigned_to_int = (function (n) {
      return n & -1;
    });
} else {
  unsigned_to_int = (function (n) {
      if (0 <= n && n <= Stdlib.max_int) {
        return n;
      }
      
    });
}

function to_string(n) {
  return Caml_format.caml_int32_format("%d", n);
}

function of_string_opt(s) {
  try {
    return Caml_format.caml_int32_of_string(s);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Stdlib.Failure) {
      return ;
    }
    throw exn;
  }
}

var compare = Caml.caml_int_compare;

function equal(x, y) {
  return x === y;
}

function unsigned_compare(n, m) {
  return Caml.caml_int_compare(n - -2147483648 | 0, m - -2147483648 | 0);
}

function min(x, y) {
  if (x <= y) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

function unsigned_div(n, d) {
  if (d < 0) {
    if (unsigned_compare(n, d) < 0) {
      return 0;
    } else {
      return 1;
    }
  }
  var q = (((n >>> 1) / d | 0) << 1);
  var r = n - Math.imul(q, d) | 0;
  if (unsigned_compare(r, d) >= 0) {
    return q + 1 | 0;
  } else {
    return q;
  }
}

function unsigned_rem(n, d) {
  return n - Math.imul(unsigned_div(n, d), d) | 0;
}

function seeded_hash(seed, x) {
  return Caml_hash.caml_hash(10, 100, seed, x);
}

function hash(x) {
  return Caml_hash.caml_hash(10, 100, 0, x);
}

var zero = 0;

var one = 1;

var minus_one = -1;

var max_int = 2147483647;

var min_int = -2147483648;

export {
  zero ,
  one ,
  minus_one ,
  unsigned_div ,
  unsigned_rem ,
  succ ,
  pred ,
  abs ,
  max_int ,
  min_int ,
  lognot ,
  unsigned_to_int ,
  of_string_opt ,
  to_string ,
  compare ,
  unsigned_compare ,
  equal ,
  min ,
  max ,
  seeded_hash ,
  hash ,
}
/* unsigned_to_int Not a pure module */