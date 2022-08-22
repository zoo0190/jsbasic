const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect = (x, y) => {
  const setX = new Set(x);
  const newSet = new Set();

  y.forEach(item => {
    if (setX.has(item)) newSet.add(item);
  });

  return newSet;
};

const diff = (x, y) => {
  const setX = new Set(x);

  y.forEach(item => {
    if (setX.has(item)) setX.delete(item);
  });

  return setX;
};

const union = (x, y) => {
  return new Set([...x, ...y]);
};

console.log(intersect(A, B)); // [1, 3, 5]
console.log(intersect(A, C)); // [3, 4]

console.log(diff(A, B)); // [2, 4]
console.log(diff(B, A)); // [22, 44]
console.log(diff(A, C)); // [1, 2, 5]
console.log(diff(B, C)); // [1, 22, 44, 5]

console.log(union(A, B)); // [1, 2, 3, 4, 5, 22, 44]
console.log(union(A, C)); // [1, 2, 3, 4, 5, 11, 222, 555]
