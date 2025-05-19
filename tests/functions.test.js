const concat = require('../src/functions.js').concat;
const removeSpaces = require('../src/functions.js').removeSpaces;

test('concat ciao and mondo is equal ciaomondo', () => {
  expect(concat("ciao", "mondo")).toBe("ciaomondo");
});

test('remove spaces from bdjvbdfvbdf bdfajvbj vdjvjbdfjv', () => {
  expect(removeSpaces("bdjvbdfvbdf bdfajvbj vdjvjbdfjv")).toBe("bdjvbdfvbdfbdfajvbjvdjvjbdfjv");
});