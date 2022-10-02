export const randTime = val => {
  return new Promise((res, rej) => {
    const random = Math.random() * 3000;
    setTimeout(() => {
      res(val);
    }, 2000);
  });
};

// [1, 2, 3, 4, 5].forEach(a => {
//   randTime(a).then(console.log);
// });

// 이거 동기처리 안됨?! 논블락임..!
// for (let i of [1, 2, 3, 4, 5]) {
//   randTime(i).then(console.log);
// }

// 이거 동기처리 됨?! 블락됨..!
// for (let k of [1, 2, 3, 4, 5]) {
//   const result = await randTime(k);
//   console.log(result);
// }

const promiseAll = arr => {
  return new Promise((resolve, reject) => {
    const newArr = [];
    let count = arr.length;

    arr.forEach((item, i) => {
      item
        .then(val => {
          newArr[i] = val;
          count -= 1;
          if (!count) {
            resolve(newArr);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};

const asyncPromiseAll = async arr => {
  const newArr = [];
  for (let co of arr) {
    newArr.push(await co);
  }
  return newArr;
};

// console.log(asyncPromiseAll([randTime(1), randTime(2), randTime(3)]));

// asyncPromiseAll([randTime(1), randTime(2), randTime(3)]).then(arr => {
//   console.table(arr);
//   // assertArray(arr, vals);
// });

// promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
//   .then(array => {
//     console.log('여긴 과연 호출될까?!');
//   })
//   .catch(error => {
//     console.log('reject!!!!!!>>', error);
//   });
