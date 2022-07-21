const reduce = (arr, cb, initValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (initValue === undefined) {
      initValue = arr[0];
      i = 1;
    }
    initValue = cb(initValue, arr[i]);
  }
  return initValue;
};

// reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
// reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과! (0 조심!!)

console.log(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  reduce([2, 2, 2], (a, b) => a * b)
);

const reduce2 = (arr, cb, initValue) => {
  if (initValue === undefined) {
    initValue = arr[0];
    arr = arr.slice(1);
  }

  for (let i = 0; i < arr.length; i++) {
    initValue = cb(initValue, arr[i]);
  }

  return initValue;
};

console.log(
  reduce2([1, 2, 3], (a, b) => a + b, 0),
  reduce2([1, 2, 3, 4, 5], (a, b) => a + b),
  reduce2([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  reduce2([2, 2, 2], (a, b) => a * b)
);
