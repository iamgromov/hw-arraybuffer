class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    if (!this.bufferView) {
      return 'empty';
    }

    let result = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      result += String.fromCharCode(this.bufferView[i]);
    }
    return result;
  }
}

export default ArrayBufferConverter;
