function concat (a, b) {
  return a + b;
}

function removeSpaces (a) {
  return a.replace(/\s+/g, '');
}

function Uppercase (a) {
  return a.toUpperCase();
}

module.exports = {
  concat,
  removeSpaces,
  Uppercase
};