const rand = (start, end) => {
  const mul = end - start + 1;
  return Math.floor(Math.random() * mul) + start;
};

const rand2 = (start, end) => {
  const mul = end - start + 1;
  console.log(Math.floor(Math.random() * mul) + start);
};

export { rand, rand2 };
