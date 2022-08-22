const keyPair = (arr, num) => {
  const obj = {};

  for (;;) {
    if (arr.length === 0) return '일치하는 값이 없습니다.';
    const lastNum = arr.pop();
    const minusNum = num - lastNum;
    if (!obj[minusNum] && obj[minusNum] !== 0) {
      obj[lastNum] = arr.length;
    } else {
      return [arr.length, obj[minusNum]];
    }
  }
};

const keyPair2 = (arr, num) => {
  const obj = {};

  for (;;) {
    if (arr.length === 0) return '일치하는 값이 없습니다.';
    const lastNum = arr.pop();
    const minusNum = num - lastNum;

    if (obj[minusNum] === undefined) {
      obj[lastNum] = arr.length;
    } else {
      return [arr.length, obj[minusNum]];
    }
  }
};

console.log(keyPair2([1, 4, 45, 6, 10, 8], 16)); // [3, 4]

console.log(keyPair2([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair2([1, 2, 3, 4, 5], 9)); // [3, 4]
