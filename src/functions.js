function concat (a, b) {
  return a + b;
}

function removeSpaces (a) {
  return a.replace(/\s+/g, '');
}

module.exports = {
  concat,
  removeSpaces
};