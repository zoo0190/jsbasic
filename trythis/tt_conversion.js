const n = 100;
let s1 = n.toString();
let s2 = n + '';

console.log(s1, typeof s1, s2, typeof s2);

const binary = n.toString(2);
console.log(binary, n.toString(8), n.toString(16));
console.log(parseInt(binary, 2), parseFloat('3.2cm'), Number('3.2cm'));

const n1 = Number(s1);
const n2 = new Number(s1);
console.log(n1, n2, typeof n1, typeof n2);

const x = 5;
console.log(typeof x, typeof !!x, typeof !!undefined);

const d1 = Date();
const d2 = new Date();
console.log(d1, d2, typeof d1, typeof d2);
console.log(d1.valueOf(), d2.valueOf());

console.log('sss' + 2, 'sss' + { id: 1 });
const u = { id: 1, name: 'hong' };
console.log(u.toString());

const T = true,
  F = false;
let xx = 1;
console.log(T || xx++, F || xx++, xx);

let a = 0b1010;
let b = 0b1100;

console.log((a & b).toString(2), a | b, a ^ b, ~b);

// console.log(2.4 % 1);

// 소수점을 안만드는 방향으로 생각해봐...!
// 정수화 -> 소수점 없애기
// for (let i = 0.1; i < 1; i = i + 0.1) {
//   console.log(i, Math.round(i * 100) / 100);
// }

// console.log((0.18 * 1000 + 0.24 * 100000) / 100000);
// console.log(0.14 + 0.28);

// ex1
for (let i = 2; i <= 10; i++) {
  const sqrt = Math.sqrt(i);
  if (!Number.isInteger(sqrt)) {
    console.log(i, sqrt.toFixed(3));
  }
}

// ex2 - 1
const today = new Date().getDay();

switch (today) {
  case 0:
    console.log('오늘은 일요일 입니당!');
    break;
  case 1:
    console.log('오늘은 월요일 입니당!');
    break;
  case 2:
    console.log('오늘은 화요일 입니당!');
    break;
  case 3:
    console.log('오늘은 수요일 입니당!');
    break;
  case 4:
    console.log('오늘은 목요일 입니당!');
    break;
  case 5:
    console.log('오늘은 금요일 입니당!');
    break;
  case 6:
    console.log('오늘은 토요일 입니당!');
    break;
}

// ex2 - 2
const dayTable = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

console.log(`오늘은 ${dayTable[today]}요일 입니당!!`);
