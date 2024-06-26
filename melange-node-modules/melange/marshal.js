// Generated by Melange

import * as Caml_bytes from "melange.js/caml_bytes.js";
import * as Caml_external_polyfill from "melange.js/caml_external_polyfill.js";
import * as Caml_string from "melange.js/caml_string.js";

function to_buffer(buff, ofs, len, v, flags) {
  if (ofs < 0 || len < 0 || ofs > (buff.length - len | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Marshal.to_buffer: substring out of bounds",
          Error: new Error()
        };
  }
  return Caml_external_polyfill.resolve("caml_output_value_to_buffer")(buff, ofs, len, v, flags);
}

function data_size(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 16 | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Marshal.data_size",
          Error: new Error()
        };
  }
  return Caml_external_polyfill.resolve("caml_marshal_data_size")(buff, ofs);
}

function total_size(buff, ofs) {
  return 16 + data_size(buff, ofs) | 0;
}

function from_bytes(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 16 | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Marshal.from_bytes",
          Error: new Error()
        };
  }
  var len = Caml_external_polyfill.resolve("caml_marshal_data_size")(buff, ofs);
  if (ofs > (buff.length - (16 + len | 0) | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Marshal.from_bytes",
          Error: new Error()
        };
  }
  return Caml_external_polyfill.resolve("caml_input_value_from_bytes")(buff, ofs);
}

function from_string(buff, ofs) {
  return from_bytes(Caml_bytes.bytes_of_string(buff), ofs);
}

function compression_supported(param) {
  var s = Caml_external_polyfill.resolve("caml_output_value_to_string")(undefined, {
        hd: /* Compression */3,
        tl: /* [] */0
      });
  var match = Caml_string.get(s, 3);
  if (match === 189) {
    return true;
  }
  if (match === 190) {
    return false;
  }
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/stdlib/marshal.ml",
          75,
          9
        ],
        Error: new Error()
      };
}

function to_channel(prim0, prim1, prim2) {
  return Caml_external_polyfill.resolve("caml_output_value")(prim0, prim1, prim2);
}

function from_channel(prim) {
  return Caml_external_polyfill.resolve("caml_input_value")(prim);
}

var header_size = 16;

export {
  to_channel ,
  to_buffer ,
  from_channel ,
  from_bytes ,
  from_string ,
  header_size ,
  data_size ,
  total_size ,
  compression_supported ,
}
/* No side effect */
