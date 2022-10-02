// setTimeout(function () {
//   console.log('task1', new Date());
//   setTimeout(function () {
//     console.log('task2', new Date());
//     setTimeout(function () {
//       console.log('task3', new Date());
//       console.log('END>>', new Date());
//       console.log('----------------------------');
//     }, 3000);
//   }, 2000);
// }, 1000);
// console.log('START', new Date());

// const promi = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const now = Date.now();
//     if (now % 2 === 0) resolve(console.log('fulfill', now));
//     else reject(new Error('어디로?'));
//   }, 1000);
// });

// // console.log(promi);

// promi.then(
//   succ => console.log('Resolve!'),
//   fail => console.log('Reject!', fail)
// );

// setTimeout(function () {
//   console.log('depth1', new Date());
//   setTimeout(function () {
//     console.log('depth2', new Date());
//     setTimeout(function () {
//       console.log('depth3', new Date());
//       throw new Error('Already 3-depth!!');
//     }, 3000);
//   }, 2000);
// }, 1000);

const tt = num => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`depth${num}`, new Date());
      num += 1;
      if (num > 3) throw new Error('Already 3-depth!!');
      return res(num);
    }, num * 1000);
  });
};

tt(1).then(tt).then(tt).catch(console.log);
console.log('START!', new Date());
