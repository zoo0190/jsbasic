const afterTime = sec => {
  if (sec < 1 || sec > 3)
    return Promise.reject(new Error('Not valid sec range!!'));
  return new Promise(resolve => setTimeout(resolve, sec * 1000, sec));
};

// const odds = [1, 2, 3].filter(async val => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r % 2 === 1;
// });
// console.log('odds=', odds);

// const kk = [1, 2, 3].map(item => afterTime(item));
// // const aa = [afterTime(1), afterTime(2), afterTime(3)];
// const dd = await Promise.all(kk);
// const cc = dd.filter(val => {
//   return val % 2 === 1;
// });

// console.log(cc);

