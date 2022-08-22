// function hello() {
//   return 'Hello, World!';
// }

// function printFnReturnValue(fn) {
//   console.log(fn.name, fn());
// }

// printFnReturnValue(hello);

// function f(n) {
//   if (typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
//   else n += 1;
// }

// let n = 10;
// let nobj = { id: 10 };
// f(n);
// f(nobj);
// console.log(n, nobj);

// const user = { id: 1, name: 'Hong' };
// function fds1({ id, name }) {
//   console.log(`Id is ${id}, name is ${name}`);
// }
// fds1(user);

// function fds2([id, name]) {
//   console.log(id, name);
// }
// fds2([3, 4]);

// const counter = (function () {
//   let curr = 0;

//   return {
//     inc: (n = 0) => {
//       curr += n;
//     },
//     getCurr: () => {
//       return curr;
//     },
//     dec: (n = 0) => {
//       curr -= n;
//     },
//   };
// })();

// console.log(counter.getCurr());
// counter.inc();
// console.log(counter.getCurr());

// counter.inc(100);
// console.log(counter.getCurr());
// counter.dec(50);
// console.log(counter.getCurr());

// const obj = {
//   name: 'Hong',
//   bark1() {
//     console.log('obj.bark=', this.name);
//   },
//   bark2: () => {
//     console.log('obj.bark2=', this.name);
//   },
// };

// obj.bark1();
// obj.bark2();

// 재귀
// function recursive1(n) {
//   if (n === 1) return n;
//   return n + recursive1(n - 1);
// }

// console.log(recursive1(100));

// function recursive2(start, end) {
//   if (end === start) return end;
//   return end + recursive2(start, end - 1);
// }

// console.log(recursive2(1, 12));

// const copyArray = arr => {
//   const rets = [];
//   for (let i of arr) {
//     if (Array.isArray(i)) {
//       rets.push(copyArray(i));
//     } else if (typeof i === 'object') {
//       rets.push(deepCopyObject(arr[i]));
//     } else {
//       rets.push(i);
//     }
//   }
//   return rets;
// };

// const deepCopyObject = obj => {
//   const newObj = {};
//   for (let i in obj) {
//     const tmpObj = obj[i];
//     if (Array.isArray(obj[i])) {
//       newObj[i] = copyArray(tmpObj);
//     } else if (typeof tmpObj === 'object') {
//       newObj[i] = deepCopyObject(tmpObj);
//     } else {
//       newObj[i] = tmpObj;
//     }
//   }
//   return newObj;
// };

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

const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

const newKim = deepCopy(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';

console.log(kim);
console.log(newKim);

console.log(
  kim.addr !== newKim.addr,
  kim.oo.name !== newKim.oo.name,
  kim.oo.addr.city !== newKim.oo.addr.city
); // true, true, true면 통과!

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return (fibonacci(n - 1) % 1234567) + (fibonacci(n - 2) % 1234567);
// }

// function fibonacciMemo(n, memo) {
//   memo = memo || {};

//   if (memo[n]) return memo[n];
//   if (n <= 1) return n;

//   return (memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo));
// }

// console.log(fibonacciMemo(50));

// function fibo(n) {
//   if (n <= 1) return n;
//   return fibo(n - 1) + fibo(n - 2);
// }

// console.log(fibo(50));
