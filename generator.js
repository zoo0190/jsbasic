function* add() {
  const x = yield '첫 번째 수?';

  const y = yield '두 번쨰 수?';

  return x + y;
}

const addGener = add();

console.log(addGener.next());
console.log(addGener.next(1));
console.log(addGener.next(2));
