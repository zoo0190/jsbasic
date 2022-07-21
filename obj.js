// const user = {
//   '': 1, // OK
//   ' ': 1, // OK
//   123: 1, // OK?        cf. user[123] * 10 = ?
//   true: 1, // OK?        cf. user[false] = 0
//   id: 1, // OK?
//   id: 2, // user.id ? 2
//   [`name`]: 'Hong', // OK? No     cf. user[`name`] = 'Hong'; // OK
//   [Symbol()]: 'Hong', // OK?       cf. s = Symbol(); user[s] = 9; // OK
//   'my-friends': ['Han', 'Kim'], // OK?
//   '0y': '000', // OK?
//   getInfo: () => `${this.id}-${this.name}`, // OK?
//   getInfo() {
//     return `${this.id}-${this.name}`;
//   }, // OK?
// };

// console.log(user, user.getInfo());
// console.log(Object.keys(user));
// console.log(Reflect.ownKeys(user));

// console.log(user.xxxxx);
// user.addr = 'Seoul';
// console.log(Object.keys(user));

// const s = Symbol();
// user[s] = 'xxx';
// console.log(Object.keys(user));
// console.log(Reflect.ownKeys(user));

function copyObject(obj) {
  const newObj = {};
  for (let i in obj) {
    newObj[i] = obj[i];
  }
  return newObj;
}

const kim = { nid: 3, nm: 'Hong', addr: 'Pusan' };
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log('kim', kim);
console.log('newKim', newKim);
console.log(kim.addr !== newKim.addr);
