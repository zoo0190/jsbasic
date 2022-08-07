const arr = [1, 2, 3, 4];

const deleteArray = (arr, start = 0, end = arr.length) => {
  return arr.filter((_, i) => i < start || i >= end);
};

console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
