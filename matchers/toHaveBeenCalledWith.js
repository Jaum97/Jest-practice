it('console.log the text "hello"', () => {
  console.log = jest.fn();
  log('hello');
  // The first argument of the first call to the function was 'hello'
  expect(console.log).toHaveBeenCalledWith('hello');
});
