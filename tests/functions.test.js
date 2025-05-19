const concat = require('../src/functions.js').concat;
const removeSpaces = require('../src/functions.js').removeSpaces;
const Uppercase = require('../src/functions.js').Uppercase;

test('concat ciao and mondo is equal ciaomondo', () => {
  expect(concat("ciao", "mondo")).toBe("ciaomondo");
});

test('remove spaces from bdjvbdfvbdf bdfajvbj vdjvjbdfjv', () => {
  expect(removeSpaces("bdjvbdfvbdf bdfajvbj vdjvjbdfjv")).toBe("bdjvbdfvbdfbdfajvbjvdjvjbdfjv");
});

test('Uppercase() of ciao is equal CIAO', () => {
  expect(Uppercase("ciao")).toBe("CIAO");
});