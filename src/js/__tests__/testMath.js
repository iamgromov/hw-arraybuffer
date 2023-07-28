import Magician from '../magician';
import Daemon from '../daemon';

test('get attack without stoned effect', () => {
  const character = new Magician('Harry');
  character.attackPower = 100;
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test('get attack with stoned effect', () => {
  const character = new Magician('Harry');
  character.attackPower = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});

test('get attack without stoned effect and distance more than 0', () => {
  const character = new Daemon('Harry');
  character.attackPower = 100;
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test('get attack without stoned effect and distance 0', () => {
  const character = new Daemon('Harry');
  character.attackPower = 100;
  character.distance = 0;
  expect(character.attack).toBe(0);
});

test('get attack with stoned effect and distance more than 0', () => {
  const character = new Magician('Harry');
  character.attackPower = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});

test('get attack with stoned effect and distance 0', () => {
  const character = new Magician('Harry');
  character.attackPower = 100;
  character.distance = 0;
  character.stoned = true;
  expect(character.attack).toBe(0);
});
