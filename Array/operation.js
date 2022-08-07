const arr = [1, 2, 3, 4];

const push = (arr, ...rest) => {
  return [...arr, ...rest];
};

const pop = (arr, num = 1) => {
  return arr.slice(0, arr.length - num);
};

const unshift = (arr, ...rest) => {
  return [...rest, ...arr];
};

const shift = (arr, num = 1) => {
  return arr.slice(num, arr.length);
};

console.log(push(arr, 5, 6));
console.log(pop(arr));
console.log(pop(arr, 2));

console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(arr);
