'use strict';

function abbreviateString (input, re) {
  return input.split(re).filter(i => i.length > 0).map(i => i[0].toUpperCase()).reduce((prev, curr) => prev + curr, '');
}

function abbreviateStrings (inputs, re) {
  return inputs.filter(i => i.length > 0).map(i => abbreviateString(i, re));
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
  abbreviateStringByLength
};
