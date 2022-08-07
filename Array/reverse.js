const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = arr => {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(makeReverseArray(a11));
console.log(a11);

const reverseArray = arr => {
  const end = arr.length - 1;
  for (let i = 0; i <= Math.floor(end / 2); i++) {
    [arr[i], arr[end - i]] = [arr[end - i], arr[i]];
  }
  return arr;
};

console.log(reverseArray(a11));
console.log(a11);
