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

const range2 = (start, end = null, step = end >= start ? 1 : -1) => {
  const arr = [];
  if (step === 0) return [start];
  if (end === null) {
    [start, end, step] =
      start >= 0 ? [start === 0 ? 0 : 1, start, 1] : [start, -1, 1];
  }

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    arr.push(i);
  }
  return arr;
};

// 통
// console.log(range2(1, 10, 1)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(range2(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(range2(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range2(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range2(10, 1, -2)); // [ 10, 8, 6, 4, 2 ]

// console.log(range2(5, 5, 1));
// console.log(range2(5, 5)); // [5]
// console.log(range2(5, 5, -1)); // [5]
// console.log(range2(5, 5, 0)); // [5]
// console.log(range2(0, 0, 5)); // [0]
// console.log(range2(0, 0)); // [0]

// console.log(range2(0, 5)); // [0, 1, 2, 3, 4, 5]
// console.log(range2(0, -1)); // [0, -1]
// console.log(range2(0, -3)); // [0, -1, -2, -3]
// console.log(range2(-3, 0)); // [-3, -2, -1, 0]

// console.log(range2(1, 5, 6)); // [1]
// console.log(range2(2, 1, -5)); // [2]
// console.log(range2(0, -1, -5)); // [0]
// console.log(range2(5, 1, 1)); // []
// console.log(range2(1, 5, -1)); // []

// console.log(range2(0)); // [0]
// console.log(range2(5)); // [1, 2, 3, 4, 5]
// console.log(range2(100)); // [1, 2, 3, 4, 5, …, 99, 100]
// console.log(range2(-5)); // [-5, -4, -3, -2, -1]

// 불통

// console.log(range(1, 10, 1)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range(10, 1, -1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range(10, 1, -2)); // [ 10, 8, 6, 4, 2 ]
// console.log(range(5)); // [1, 2, 3, 4, 5]
// console.log(range(100)); // [1, 2, 3, 4, 5, …, 99, 100]
// // console.log(range(-5));
// console.log(range(5, 5)); // [5]
// console.log(range(5, 5, 0)); // [5]
// console.log(range(5, 5, -1)); // [5]
// console.log(range(5, 1, 1)); // []
// console.log(range(1, 5, -1)); // []
// console.log(range(1, 5, 6)); // [1]
// console.log(range(0)); // [0]
// console.log(range(0, 0)); // [0]
// console.log(range(0, 0, 5)); // [0]
// console.log(range(0, 5)); // [0, 1, 2, 3, 4, 5]
// console.log(range(0, -1)); // [0, -1]
// console.log(range(0, -3)); // [0, -1, -2, -3]
// console.log(range(-3, 0)); // [-3, -2, -1, 0]
// // console.log(range(-1));

// reverse 쓸 수 있지만 배열을 한 번더 돌아야한다...

// console.log(Math.floor(-3.3));
