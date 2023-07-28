import ArrayBufferConverter from '../converter';

let getBuffer;
let converter;

beforeEach(() => {
  converter = new ArrayBufferConverter();
  getBuffer = () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  };
  converter.load(getBuffer());
});

test('return string if buffer has data', () => {
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('return empty if buffer dont load', () => {
  converter = new ArrayBufferConverter();
  const result = converter.toString();
  expect(result).toBe('empty');
});
