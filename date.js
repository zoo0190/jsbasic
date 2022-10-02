import range from './random.js';
// 1
// const q1 = new Date(1970, 0, 2, 9);
// console.log(q1.getTime() / 1000);

// 2
const fiveDays = [];
const today = new Date();
for (let i = 0; i < 5; i++) {
  fiveDays.push(new Date(today.getFullYear(), today.getMonth(), range(1, 31)));
}
console.log(fiveDays.sort((a, b) => b - a));

// // 3
// const nextYear = new Date().setFullYear(2023);

// const dayObj = {
//   0: '일',
//   1: '월',
//   2: '화',
//   3: '수',
//   4: '목',
//   5: '금',
//   6: '토',
// };

// console.log(dayObj[new Date(nextYear).getDay()]);

// // 4
// const next100Day = new Date().setHours(2400);
// console.log(new Date(next100Day).toLocaleString());
