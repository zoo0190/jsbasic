const intersect = (x, y) => {
  const setX = new Set(x);
  const newSet = new Set();

  y.forEach(item => {
    if (setX.has(item)) newSet.add(item);
  });

  return newSet;
};

const differ = (x, y) => {
  const setX = new Set(x);

  y.forEach(item => {
    if (setX.has(item)) setX.delete(item);
  });

  return setX;
};

const union = (x, y) => {
  return new Set([...x, ...y]);
};

export { intersect, differ, union };
