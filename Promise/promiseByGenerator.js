import fetch from 'node-fetch';
const afterTime = sec => {
  if (sec < 1 || sec > 3)
    return Promise.reject(new Error('Not valid sec range!!'));
  return new Promise(resolve => setTimeout(resolve, sec * 1000, sec));
};

// function* pAfterTime(sec) {
//   return yield afterTime(sec);
// }
// const pa = pAfterTime(1);
// const n1 = pa.next();
// n1.value
//   .then(res => {
//     const n2 = pa.next(res);
//     console.log('res>>>>>', n1.next);
//   })
//   .catch(console.error);

const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';

// fetch(sampleUrl)
//   .then(res => res.json())
//   .then(user => console.log(user.name));

function* generFetch(url) {
  const response = yield fetch(url);
  const user = yield response.json();
  return user.name;
}

// const a = genFetch(sampleUrl);
// const b = a.next();
// b.value.then(res => {
//   console.log(res);
//   return res;
// });

// const mapResult = [1, 2, 3].map(async val => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r;
// });
// console.log('mapResult=', await Promise.all(mapResult));

// const odds = [1, 2, 3].filter(async val => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r % 2 === 1;
// });
// console.log('odds=', await Promise.all(odds));
