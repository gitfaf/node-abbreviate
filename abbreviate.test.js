'use strict';

const abbreviate = require('./index').abbreviate;

function test_abbreviateStringByLength() {
  const expected =  {abbreviated: "AT", shortened: "an-t", rest: "u-tu", length: 4};
  let out = abbreviate.stringByLength('an-tu-tu', 4, /[ -]/);
  console.log(out.abbreviated === expected.abbreviated);
  console.log(out.shortened === expected.shortened);
  console.log(out.rest === expected.rest);
  console.log(out.length === expected.length);
}

function test_abbreviateString() {
  const expected =  "GFGF";
  let out = abbreviate.aString('git-faf Git Faf', /[- ]/);
  console.log(out === expected);
}

function test_abbreviateStrings() {
  const expected =  ["ATT", "USA"];
  let out = abbreviate.manyStrings(['an-tu-tu', 'united states of america'], /[- of]/);
  console.log(out[0] === expected[0]);
  console.log(out[1] === expected[1]);
}

function test_uppercaseAutoAbbreviate () {
  const expected = "RI";
  let out = abbreviate.autoUppercase("Republic of India");
  console.log(out === expected);
}

function runTests () {
  console.log('test_abbreviateString');
  test_abbreviateString();
  console.log('test_abbreviateStrings');
  test_abbreviateStrings();
  console.log('test_abbreviateStringByLength');
  test_abbreviateStringByLength();
  console.log('test_uppercaseAutoAbbreviate');
  test_uppercaseAutoAbbreviate();
}

runTests();

module.exports = runTests;
