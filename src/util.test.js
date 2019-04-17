const { testApi } = require('./util');

test('Should output an object in with login === parameter', () => {
  const username = testApi("meta103");
  expect(username).resolves.toBe("meta103");
});