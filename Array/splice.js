const arr = [1, 2, 3, 4, 5];

const splice = (arr, start = 0, deleteCount = arr.length - 1, ...rest) => {
  const newArr = arr.filter((_, i) => i < start || i >= start + deleteCount);

  if (rest.length > 0)
    return [...newArr.slice(0, start), ...rest, ...newArr.slice(start)];
  return newArr;
};

const spliceAnswer = (
  arr,
  start = 0,
  deleteCount = arr.length - 1,
  ...rest
) => [...arr.slice(0, start), ...rest, ...arr.slice(start + deleteCount)];

const a1 = splice(arr, 1, 3);
console.log(a1); // a1 = [1, 5]
const a2 = splice(a1, 1, 0, 2, 3, 4);
console.log(a2); // a2 = [1, 2, 3, 4, 5]
const a3 = splice(a2, 2);
console.log(a3); // a3 = [1, 2]
const a4 = splice(a3, 1, 1, 3, 4, 5);
console.log(a4); // a4 = [1, 3, 4, 5]
const a5 = splice(a4, 2, 2, 7, 8, 9);
console.log(a5); // a5 = [1, 3, 7, 8, 9]
