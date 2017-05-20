'use strict';

const abr = require('./abbreviate');

function test_abbreviateStringByLength() {
  const expected =  {abbreviated: "AT", shortened: "an-t", rest: "u-tu", length: 4};
  let out = abr.abbreviateStringByLength('an-tu-tu', 4, /[ -]/);
  console.log(out.abbreviated === expected.abbreviated);
  console.log(out.shortened === expected.shortened);
  console.log(out.rest === expected.rest);
  console.log(out.length === expected.length);
}

function test_abbreviateString() {
  const expected =  ["GFGF"];
  let out = abr.abbreviateStrings(['git-faf Git Faf'], /[- ]/);
  console.log(out[0] === expected[0]);
}

function test_abbreviateStrings() {
  const expected =  ["ATT", "USA"];
  let out = abr.abbreviateStrings(['an-tu-tu', 'united states of america'], /[- of]/);
  console.log(out[0] === expected[0]);
  console.log(out[1] === expected[1]);
}

function runTests () {
  test_abbreviateString();
  test_abbreviateStrings();
  test_abbreviateStringByLength();
}
runTests();

module.exports = runTests;