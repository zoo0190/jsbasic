const reduce = (arr, cb, initValue) => {
  let val = initValue;
  for (let i = 0; i < arr.length; i++) {
    if (val === undefined) {
      val = arr[0];
      i = 1;
    }
    val = cb(val, arr[i]);
  }
  return val;
};

// reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
// reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과! (0 조심!!)

console.log(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  reduce([2, 2, 2], (a, b) => a * b),
  reduce([3, 3, 3], (a, b) => a * b, 0)
);

const reduce2 = (arr, cb, initValue) => {
  let val = initValue ?? arr[0];
  const newArr = !!val ? arr.slice(1) : [...arr];

  for (let i = 0; i < newArr.length; i++) {
    val = cb(val, newArr[i]);
  }

  return val;
};

console.log(
  reduce2([1, 2, 3], (a, b) => a + b, 0),
  reduce2([1, 2, 3, 4, 5], (a, b) => a + b, null),
  reduce2([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  reduce2([2, 2, 2], (a, b) => a * b),
  reduce2([3, 3, 3], (a, b) => a * b, 0)
);
