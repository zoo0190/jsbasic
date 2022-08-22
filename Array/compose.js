const compose =
  arr =>
  (...fns) =>
    fns.reduce((c, fn) => fn(c), arr);

console.log(
  compose([1, 2, 3, 4, 5])(
    item => item.map(a => a ** 2),
    item => item.map(Math.sqrt),
    item => item.map(a => a ** 3)
  )
);

// 다시 생각 해 볼 것
const ff = (arr, ...fns) => fns.reduce((c, fn) => fn(c), arr);

console.log(
  ff(
    [1, 2, 3, 4, 5],
    item => item.map(a => a ** 2),
    item => item.map(Math.sqrt),
    item => item.map(a => a ** 3)
  )
);
