const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

// 만들어 놓고 시작 한다...
const rangeSum = (() => {
  const obj = arr.reduce((acc, cur, curIdx) => {
    acc[curIdx] = curIdx === 0 ? cur : acc[curIdx - 1] + cur;
    return acc;
  }, {});

  return (start, end) => {
    const startNum = start - 1;
    return startNum < 0 ? obj[end] : obj[end] - obj[startNum];
  };
})();

// 필요할 때 만든다...
const rangeSum2 = (() => {
  const obj = {};
  return (start, end) => {
    const startNum = start - 1;
    const endVal =
      obj[end] === undefined
        ? ((obj[end] = arr
            .slice(0, end + 1)
            .reduce((acc, cur) => acc + cur, 0)),
          obj[end])
        : obj[end];
    const startVal =
      obj[startNum] === undefined
        ? ((obj[startNum] = arr
            .slice(0, start)
            .reduce((acc, cur) => acc + cur, 0)),
          obj[startNum])
        : obj[startNum];

    return endVal - startVal;
  };
})();

console.log(rangeSum(2, 5)); // 19
console.log(rangeSum2(2, 5));
console.log(rangeSum2(3, 5));
// console.log(rangeSum(3, 5)); // 15
// console.log(rangeSum(1, 4)); // 14
// console.log(rangeSum(5, 8)); // 30
// console.log(rangeSum(6, 8)); // 22
// console.log(rangeSum(2, 8)); // 41
// console.log(rangeSum(4, 4)); // 5
