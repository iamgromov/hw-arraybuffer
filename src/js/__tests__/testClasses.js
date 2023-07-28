import Character from '../character';

test('return value of name', () => {
  const test = new Character('qwerty', 'Swordsman');
  expect(test.name).toEqual('qwerty');
});

test('return value of type', () => {
  const test = new Character('qwerty', 'Undead');
  expect(test.type).toEqual('Undead');
});

test('name length must be more than 2', () => {
  expect(() => new Character('q', 'Daemon')).toThrowError('hero name must be between 2 and 10 symbols');
});

test('name length must be less than 10', () => {
  expect(() => new Character('qwertyqwertyqwerty', 'Magician')).toThrowError('hero name must be between 2 and 10 symbols');
});

test('error if wrong type', () => {
  expect(() => new Character('qwerty', 'Peasant')).toThrowError('unknown type of hero');
});
