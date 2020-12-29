function* createIdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}
const idGenerator = createIdGenerator();

function* newFontGenerator(value) {
  while (true) {
    const char = yield value;
    if (char === 'up') {
      value += 2;
    }
    if (char === 'down') {
      value -= 2;
    }
  }
}
const fontGenerator = newFontGenerator(14);

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next().value);