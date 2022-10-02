const deepCopy = reference => {
  const newRef = Array.isArray(reference) ? [] : {};

  for (let i in reference) {
    const tmp = reference[i];
    if (typeof tmp === 'object') {
      newRef[i] = deepCopy(tmp);
    } else {
      newRef[i] = tmp;
    }
  }
  return newRef;
};

export { deepCopy };
