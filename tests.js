var excerptAtLineCol = require("./");
var test = require("tape");

test("no surrounding lines", function(t){
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 2, 2), "three\n  ^");
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 2, 2, 0), "three\n  ^");
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 4, 2), "five\n  ^");
  t.end();
});

test("one surrounding line", function(t){
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 0, 2, 1), "one\n  ^\ntwo");
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 2, 2, 1), "two\nthree\n  ^\nfour");
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 4, 2, 1), "four\nfive\n  ^");
  t.end();
});

test("a ton of surrounding line", function(t){
  t.equals(excerptAtLineCol("one\ntwo\nthree\nfour\nfive", 2, 2, 10), "one\ntwo\nthree\n  ^\nfour\nfive");
  t.end();
});

test("handling out of bound line/col numbers", function(t){
  t.equals(excerptAtLineCol("one", 2, 1), "");
  t.equals(excerptAtLineCol("one", 0, 100), "one\n   ^");
  t.end();
});

test("handling leading tabs or spaces", function(t){
  t.equals(excerptAtLineCol("\t one\n\t two\n\t three", 1, 2, 1), "\t one\n\t two\n\t ^\n\t three");
  t.end();
});
