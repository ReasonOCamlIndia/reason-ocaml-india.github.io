// Generated by Melange

import * as Caml_bytes from "melange.js/caml_bytes.js";
import * as Caml_exceptions from "melange.js/caml_exceptions.js";
import * as Caml_external_polyfill from "melange.js/caml_external_polyfill.js";
import * as Caml_format from "melange.js/caml_format.js";
import * as Caml_io from "melange.js/caml_io.js";
import * as Caml_js_exceptions from "melange.js/caml_js_exceptions.js";
import * as Caml_string from "melange.js/caml_string.js";
import * as Caml_sys from "melange.js/caml_sys.js";
import * as CamlinternalFormatBasics from "./camlinternalFormatBasics.js";
import * as Curry from "melange.js/curry.js";

function failwith(s) {
  throw {
        RE_EXN_ID: "Failure",
        _1: s,
        Error: new Error()
      };
}

function invalid_arg(s) {
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: s,
        Error: new Error()
      };
}

var Exit = /* @__PURE__ */Caml_exceptions.create("Stdlib.Exit");

var Failure = "Failure";

var Sys_error = "Sys_error";

var End_of_file = "End_of_file";

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.22507385850720138e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "char_of_int",
          Error: new Error()
        };
  }
  return n;
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" :
        return false;
    case "true" :
        return true;
    default:
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "bool_of_string",
            Error: new Error()
          };
  }
}

function bool_of_string_opt(param) {
  switch (param) {
    case "false" :
        return false;
    case "true" :
        return true;
    default:
      return ;
  }
}

function int_of_string_opt(s) {
  try {
    return Caml_format.caml_int_of_string(s);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Failure) {
      return ;
    }
    throw exn;
  }
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return s + ".";
    }
    var match = Caml_string.get(s, i);
    if (match >= 48) {
      if (match >= 58) {
        return s;
      }
      _i = i + 1 | 0;
      continue ;
    }
    if (match !== 45) {
      return s;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function float_of_string_opt(s) {
  try {
    return Caml_format.caml_float_of_string(s);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === Failure) {
      return ;
    }
    throw exn;
  }
}

function $at_dps(_dst, _offset, _l1, l2) {
  while(true) {
    var dst = _dst;
    var offset = _offset;
    var l1 = _l1;
    if (!l1) {
      dst[offset] = l2;
      return ;
    }
    var match = l1.tl;
    var h1 = l1.hd;
    if (!match) {
      dst[offset] = {
        hd: h1,
        tl: l2
      };
      return ;
    }
    var match$1 = match.tl;
    var h2 = match.hd;
    if (!match$1) {
      dst[offset] = {
        hd: h1,
        tl: {
          hd: h2,
          tl: l2
        }
      };
      return ;
    }
    var block = {
      hd: match$1.hd,
      tl: 24029
    };
    dst[offset] = {
      hd: h1,
      tl: {
        hd: h2,
        tl: block
      }
    };
    _l1 = match$1.tl;
    _offset = "tl";
    _dst = block;
    continue ;
  };
}

function $at(l1, l2) {
  if (!l1) {
    return l2;
  }
  var match = l1.tl;
  var h1 = l1.hd;
  if (!match) {
    return {
            hd: h1,
            tl: l2
          };
  }
  var match$1 = match.tl;
  var h2 = match.hd;
  if (!match$1) {
    return {
            hd: h1,
            tl: {
              hd: h2,
              tl: l2
            }
          };
  }
  var block = {
    hd: match$1.hd,
    tl: 24029
  };
  return {
          hd: h1,
          tl: {
            hd: h2,
            tl: ($at_dps(block, "tl", match$1.tl, l2), block)
          }
        };
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(mode, perm, name) {
  var c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_out")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
  Caml_external_polyfill.resolve("caml_ml_set_channel_name")(c, name);
  return c;
}

function open_out(name) {
  return open_out_gen({
              hd: /* Open_wronly */1,
              tl: {
                hd: /* Open_creat */3,
                tl: {
                  hd: /* Open_trunc */4,
                  tl: {
                    hd: /* Open_text */7,
                    tl: /* [] */0
                  }
                }
              }
            }, 438, name);
}

function open_out_bin(name) {
  return open_out_gen({
              hd: /* Open_wronly */1,
              tl: {
                hd: /* Open_creat */3,
                tl: {
                  hd: /* Open_trunc */4,
                  tl: {
                    hd: /* Open_binary */6,
                    tl: /* [] */0
                  }
                }
              }
            }, 438, name);
}

function flush_all(param) {
  var _param = Caml_io.caml_ml_out_channels_list(undefined);
  while(true) {
    var param$1 = _param;
    if (!param$1) {
      return ;
    }
    try {
      Caml_io.caml_ml_flush(param$1.hd);
    }
    catch (raw_exn){
      var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn.RE_EXN_ID !== Sys_error) {
        throw exn;
      }
      
    }
    _param = param$1.tl;
    continue ;
  };
}

function output_bytes(oc, s) {
  Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, 0, s.length);
}

function output_string(oc, s) {
  Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "output",
          Error: new Error()
        };
  }
  Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, ofs, len);
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "output_substring",
          Error: new Error()
        };
  }
  Caml_io.caml_ml_output(oc, s, ofs, len);
}

function output_value(chan, v) {
  Caml_external_polyfill.resolve("caml_output_value")(chan, v, /* [] */0);
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  Caml_external_polyfill.resolve("caml_ml_close_channel")(oc);
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return Caml_external_polyfill.resolve("caml_ml_close_channel")(oc);
  }
  catch (exn$1){
    return ;
  }
}

function open_in_gen(mode, perm, name) {
  var c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_in")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
  Caml_external_polyfill.resolve("caml_ml_set_channel_name")(c, name);
  return c;
}

function open_in(name) {
  return open_in_gen({
              hd: /* Open_rdonly */0,
              tl: {
                hd: /* Open_text */7,
                tl: /* [] */0
              }
            }, 0, name);
}

function open_in_bin(name) {
  return open_in_gen({
              hd: /* Open_rdonly */0,
              tl: {
                hd: /* Open_binary */6,
                tl: /* [] */0
              }
            }, 0, name);
}

function input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "input",
          Error: new Error()
        };
  }
  return Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
}

function unsafe_really_input(ic, s, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return ;
    }
    var r = Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
    if (r === 0) {
      throw {
            RE_EXN_ID: End_of_file,
            Error: new Error()
          };
    }
    _len = len - r | 0;
    _ofs = ofs + r | 0;
    continue ;
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "really_input",
          Error: new Error()
        };
  }
  unsafe_really_input(ic, s, ofs, len);
}

function really_input_string(ic, len) {
  var s = Caml_bytes.caml_create_bytes(len);
  really_input(ic, s, 0, len);
  return Caml_bytes.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (!param) {
        return buf;
      }
      var hd = param.hd;
      var len = hd.length;
      Caml_bytes.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
      _param = param.tl;
      _pos = pos - len | 0;
      continue ;
    };
  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_external_polyfill.resolve("caml_ml_input_scan_line")(chan);
      if (n === 0) {
        if (accu) {
          return build_result(Caml_bytes.caml_create_bytes(len), len, accu);
        }
        throw {
              RE_EXN_ID: End_of_file,
              Error: new Error()
            };
      }
      if (n > 0) {
        var res = Caml_bytes.caml_create_bytes(n - 1 | 0);
        Caml_external_polyfill.resolve("caml_ml_input")(chan, res, 0, n - 1 | 0);
        Caml_external_polyfill.resolve("caml_ml_input_char")(chan);
        if (!accu) {
          return res;
        }
        var len$1 = (len + n | 0) - 1 | 0;
        return build_result(Caml_bytes.caml_create_bytes(len$1), len$1, {
                    hd: res,
                    tl: accu
                  });
      }
      var beg = Caml_bytes.caml_create_bytes(-n | 0);
      Caml_external_polyfill.resolve("caml_ml_input")(chan, beg, 0, -n | 0);
      _len = len - n | 0;
      _accu = {
        hd: beg,
        tl: accu
      };
      continue ;
    };
  };
  return Caml_bytes.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr(ic) {
  try {
    return Caml_external_polyfill.resolve("caml_ml_close_channel")(ic);
  }
  catch (exn){
    return ;
  }
}

function print_char(c) {
  Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  output_string(stdout, s);
}

function print_bytes(s) {
  output_bytes(stdout, s);
}

function print_int(i) {
  output_string(stdout, String(i));
}

function print_float(f) {
  output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_newline(param) {
  Caml_io.caml_ml_output_char(stdout, /* '\n' */10);
  Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  output_string(stderr, s);
}

function prerr_bytes(s) {
  output_bytes(stderr, s);
}

function prerr_int(i) {
  output_string(stderr, String(i));
}

function prerr_float(f) {
  output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_newline(param) {
  Caml_io.caml_ml_output_char(stderr, /* '\n' */10);
  Caml_io.caml_ml_flush(stderr);
}

function read_line(param) {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int(param) {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_int_opt(param) {
  return int_of_string_opt((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float(param) {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float_opt(param) {
  return float_of_string_opt((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param._1;
}

function $caret$caret(param, param$1) {
  return /* Format */{
          _0: CamlinternalFormatBasics.concat_fmt(param._0, param$1._0),
          _1: param._1 + ("%," + param$1._1)
        };
}

var exit_function = {
  contents: flush_all
};

function at_exit(f) {
  var f_yet_to_run = {
    contents: true
  };
  var old_exit = exit_function.contents;
  var new_exit = function (param) {
    if (!f_yet_to_run.contents) {
      f_yet_to_run.contents = false;
      Curry._1(f, undefined);
    }
    Curry._1(old_exit, undefined);
  };
  exit_function.contents = new_exit;
}

var do_domain_local_at_exit = {
  contents: (function (param) {
      
    })
};

function do_at_exit(param) {
  Curry._1(do_domain_local_at_exit.contents, undefined);
  Curry._1(exit_function.contents, undefined);
}

function exit(retcode) {
  do_at_exit(undefined);
  return Caml_sys.caml_sys_exit(retcode);
}

var Match_failure = "Match_failure";

var Assert_failure = "Assert_failure";

var Invalid_argument = "Invalid_argument";

var Not_found = "Not_found";

var Out_of_memory = "Out_of_memory";

var Stack_overflow = "Stack_overflow";

var Division_by_zero = "Division_by_zero";

var Sys_blocked_io = "Sys_blocked_io";

var Undefined_recursive_module = "Undefined_recursive_module";

var max_int = 2147483647;

var infinity = Infinity;

var neg_infinity = -Infinity;

var max_float = 1.79769313486231571e+308;

var min_float = 2.22507385850720138e-308;

var epsilon_float = 2.22044604925031308e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_output_int")(prim0, prim1);
}

function seek_out(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_seek_out")(prim0, prim1);
}

function pos_out(prim) {
  return Caml_external_polyfill.resolve("caml_ml_pos_out")(prim);
}

function out_channel_length(prim) {
  return Caml_external_polyfill.resolve("caml_ml_channel_size")(prim);
}

function set_binary_mode_out(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_set_binary_mode")(prim0, prim1);
}

function input_char(prim) {
  return Caml_external_polyfill.resolve("caml_ml_input_char")(prim);
}

function input_byte(prim) {
  return Caml_external_polyfill.resolve("caml_ml_input_char")(prim);
}

function input_binary_int(prim) {
  return Caml_external_polyfill.resolve("caml_ml_input_int")(prim);
}

function input_value(prim) {
  return Caml_external_polyfill.resolve("caml_input_value")(prim);
}

function seek_in(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_seek_in")(prim0, prim1);
}

function pos_in(prim) {
  return Caml_external_polyfill.resolve("caml_ml_pos_in")(prim);
}

function in_channel_length(prim) {
  return Caml_external_polyfill.resolve("caml_ml_channel_size")(prim);
}

function close_in(prim) {
  return Caml_external_polyfill.resolve("caml_ml_close_channel")(prim);
}

function set_binary_mode_in(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_set_binary_mode")(prim0, prim1);
}

function LargeFile_seek_out(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_seek_out_64")(prim0, prim1);
}

function LargeFile_pos_out(prim) {
  return Caml_external_polyfill.resolve("caml_ml_pos_out_64")(prim);
}

function LargeFile_out_channel_length(prim) {
  return Caml_external_polyfill.resolve("caml_ml_channel_size_64")(prim);
}

function LargeFile_seek_in(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_seek_in_64")(prim0, prim1);
}

function LargeFile_pos_in(prim) {
  return Caml_external_polyfill.resolve("caml_ml_pos_in_64")(prim);
}

function LargeFile_in_channel_length(prim) {
  return Caml_external_polyfill.resolve("caml_ml_channel_size_64")(prim);
}

var LargeFile = {
  seek_out: LargeFile_seek_out,
  pos_out: LargeFile_pos_out,
  out_channel_length: LargeFile_out_channel_length,
  seek_in: LargeFile_seek_in,
  pos_in: LargeFile_pos_in,
  in_channel_length: LargeFile_in_channel_length
};

export {
  invalid_arg ,
  failwith ,
  Exit ,
  Match_failure ,
  Assert_failure ,
  Invalid_argument ,
  Failure ,
  Not_found ,
  Out_of_memory ,
  Stack_overflow ,
  Sys_error ,
  End_of_file ,
  Division_by_zero ,
  Sys_blocked_io ,
  Undefined_recursive_module ,
  abs ,
  max_int ,
  min_int ,
  lnot ,
  infinity ,
  neg_infinity ,
  max_float ,
  min_float ,
  epsilon_float ,
  classify_float ,
  char_of_int ,
  string_of_bool ,
  bool_of_string_opt ,
  bool_of_string ,
  int_of_string_opt ,
  string_of_float ,
  float_of_string_opt ,
  $at ,
  stdin ,
  stdout ,
  stderr ,
  print_char ,
  print_string ,
  print_bytes ,
  print_int ,
  print_float ,
  print_newline ,
  prerr_char ,
  prerr_string ,
  prerr_bytes ,
  prerr_int ,
  prerr_float ,
  prerr_newline ,
  read_line ,
  read_int_opt ,
  read_int ,
  read_float_opt ,
  read_float ,
  open_out ,
  open_out_bin ,
  open_out_gen ,
  flush ,
  flush_all ,
  output_char ,
  output_string ,
  output_bytes ,
  output ,
  output_substring ,
  output_byte ,
  output_binary_int ,
  output_value ,
  seek_out ,
  pos_out ,
  out_channel_length ,
  close_out ,
  close_out_noerr ,
  set_binary_mode_out ,
  open_in ,
  open_in_bin ,
  open_in_gen ,
  input_char ,
  input_line ,
  input ,
  really_input ,
  really_input_string ,
  input_byte ,
  input_binary_int ,
  input_value ,
  seek_in ,
  pos_in ,
  in_channel_length ,
  close_in ,
  close_in_noerr ,
  set_binary_mode_in ,
  LargeFile ,
  string_of_format ,
  $caret$caret ,
  exit ,
  at_exit ,
  valid_float_lexem ,
  unsafe_really_input ,
  do_at_exit ,
  do_domain_local_at_exit ,
}
/* No side effect */
