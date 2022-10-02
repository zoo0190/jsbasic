import { LINE2 } from './localdata.js';

class Subway {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  // [Symbol.iterator]() {
  //   let startIdx = LINE2.indexOf(this.start);

  //   let value;
  //   let done;

  //   return {
  //     next: () => {
  //       if (LINE2.length === startIdx + 1) {
  //         startIdx = 0;
  //       }
  //       [value, done] =
  //         LINE2[startIdx - 1] !== this.end
  //           ? [LINE2[startIdx++], false]
  //           : [undefined, true];

  //       return { value, done };
  //     },
  //   };
  // }

  *[Symbol.iterator]() {
    let startIdx = LINE2.indexOf(this.start);
    for (;;) {
      yield LINE2[startIdx++];
      if (LINE2.length === startIdx) {
        startIdx = 0;
      }
      if (LINE2[startIdx - 1] === this.end) break;
    }
  }
}

// const routes = new Subway('문래', '신림');
// const it1 = routes[Symbol.iterator]();
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]

const routes2 = new Subway('구로디지털단지', '성수');
console.log([...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
