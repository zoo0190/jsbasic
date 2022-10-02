const range = (start, end, step) => {
  // 인자가 정수인 경우 바꿔도 괜찮
  // Array.from 수정하기 -> 왜? 밑에처럼 쓰면 인스턴스 2개 만듬!!
  // undefined 쓰지말기..
  if (end === undefined) {
    return Array(start)
      .fill(0)
      .map((_, idx) => idx + 1);
  }

  const checkNum = end - start;
  const s = step ?? (checkNum > 0 ? 1 : -1);
  if (checkNum === 0) return [start];

  // 시작과 끝이 같은경우

  // step이 잘못 입력한 경우
  if (Math.sign(checkNum) !== Math.sign(s)) return [];

  const arr = [];
  for (let i = start; checkNum > 0 ? i <= end : i >= end; i += s) {
    arr.push(i);
  }
  return arr;
};

// if문으로 바꿔보기 -> range3 함수만들어서!
const range2 = (start, end, step = end >= start ? 1 : -1) => {
  if (step === 0) return [start];
  if (!end && end !== 0) {
    [start, end, step] =
      start >= 0 ? [start === 0 ? 0 : 1, start, 1] : [start, -1, 1];
  }

  const arr = [];
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    arr.push(i);
  }

  return arr;
};

const splicePure = (arr, start = 0, deleteCount = arr.length - 1, ...rest) => {
  const newArr = arr.filter((_, i) => i < start || i >= start + deleteCount);

  if (rest.length > 0)
    return [...newArr.slice(0, start), ...rest, ...newArr.slice(start)];
  return newArr;
};

export { range, range2, splicePure };
