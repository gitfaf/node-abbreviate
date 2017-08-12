'use strict';

function abbreviateString (input, re) {
  return input                                        /* returns a string */
          .split(re)                                  /* create array as per provided regular expression passed */
          .filter(i => i.length > 0)                  /* take only the non-empty strings */
          .map(i => i[0].toUpperCase())               /* to uppercase */
          .reduce((prev, curr) => prev + curr, '');   /* glue every uppercased together */
}

function abbreviateStrings (inputs, re) {
  return inputs                                       /* inputs is an array of strings; returns an array. */
          .filter(i => i.length > 0)                  /* take only the non-empty strings */
          .map(i => abbreviateString(i, re));         /* send every string to get abbreviation */
}

function uppercaseAutoAbbreviate (input) {
  /* selects only the uppercased letters and returns simplest abbreviation */
  return input                                        /* Input string */
          .split('')                                  /* create array out of string */
          .filter(i => i >= 'A' && i <= 'Z')          /* only the uppercased letters */
          .reduce((a, c) => a + c, '');               /* prepare a string out of it. */
}

function abbreviateStringByLength (input, length, re) {
  let shortened = input.slice(0, length);
  let rest = input.slice(length);
  let abbreviated = abbreviateString(shortened, re);
  return {
    abbreviated,
    shortened,
    rest,
    length
  };
}

module.exports = {
  abbreviateString,
  abbreviateStrings,
  abbreviateStringByLength,
  uppercaseAutoAbbreviate
};
