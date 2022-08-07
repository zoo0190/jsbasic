const arr = [1, 4, 9];
const powSqrtByForOf = arr => {
  const powArr = [];
  const sqrtArr = [];
  for (let el of arr) {
    powArr.push(el * el);
    sqrtArr.push(Math.sqrt(el));
  }
  return [powArr, sqrtArr];
};

const powSqrtByForEach = arr => {
  const powArr = [];
  const sqrtArr = [];
  arr.forEach(el => {
    powArr.push(el * el);
    sqrtArr.push(Math.sqrt(el));
  });
  return [powArr, sqrtArr];
};

const powSqrtByMap = arr => {
  return [arr.map(value => value * value), arr.map(value => Math.sqrt(value))];
};

console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
