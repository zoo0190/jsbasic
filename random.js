// 1
export const rand = (start, end) => {
  const mul = end - start + 1;
  return Math.floor(Math.random() * mul) + start;
};

export const rand2 = (start, end) => {
  const mul = end - start + 1;
  console.log(Math.floor(Math.random() * mul) + start);
};

// 2
const betweenOneAndTen = fn => {
  const obj = {};
  let num = 0;
  while (num <= 1000) {
    const ranNum = fn(1, 10);
    if (!obj[ranNum]) {
      obj[ranNum] = 1;
    } else {
      obj[ranNum] += 1;
    }
    num += 1;
  }
  return obj;
};

// betweenOneAndTen(range);
