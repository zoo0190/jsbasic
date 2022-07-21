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

const kims = [kim, newKim];
const newKims = deepCopy(kims);
newKims[1]['arr'][0] = 2000;
console.log(kims);
console.log('===================');
console.log(newKims);
