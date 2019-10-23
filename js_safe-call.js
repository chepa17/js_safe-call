 function safeCall(f) {
  try {
      f();
      return true;
  } catch(e) {
      return false;
  }
}

console.log(safeCall(() => console.log('Hello!')));
console.log(safeCall(() => JSON.parse('abc')));
console.log(safeCall(() => false));
console.log(safeCall(() => abc));
