// // let widx = -1;
// // const getNextWeek = () => {
// //   widx += 1; // side-effect!
// //   if (widx >= weeks.length) widx = 0;
// //   return `${weeks[widx]}요일`;
// // };

// // let cnt = 0;
// // const intl = setInterval(() => {
// //   // widx += 2; // side-effect!
// //   console.log('call', cnt, getNextWeek());
// //   if ((cnt += 1) === 8) clearInterval(intl);
// // }, 1000);

// 스테틱 상수
export const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

export const increaseOne = () => {
  const subObj = {};

  function control(subject) {
    subObj[subject] = subObj[subject] ?? -1;
    subObj[subject] += 1;
    if (subObj[subject] >= WEEKS.length) subObj[subject] = 0;
    return subObj[subject];
  }

  return control;
};

const intervalFn = (cb, delay, increaseHelper) => {
  let cnt = 0;
  const idxfn = increaseHelper('안녕');

  return () => {
    const intl = setInterval(() => {
      cb(WEEKS, cnt, idxfn());
      if ((cnt += 1) === 8) clearInterval(intl);
    }, delay);
  };
};

// intervalFn(
//   (arr, cnt, idx) => console.log('call', cnt, `${arr[idx]}요일`),
//   1000,
//   increaseOne
// )();
