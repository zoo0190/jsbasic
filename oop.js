class Collection {
  // 수정요망
  // [Symbol.iterator]() {
  //   return this.#arr.values();
  // }
}

class ArrayList extends Collection {
  #value;
  constructor(value) {
    super();
    this.#value = value;
  }

  // static listToArray(value) {
  //   const arr = [];
  //   const f = a => {
  //     arr.push(a.value);
  //     if (!a.rest) return;
  //     f(a.rest);
  //   };
  //   f(value);
  //   return arr;
  // }

  static arrayToList(val) {
    return val.reduce((acc, cur) => {}, {});
  }

  get _value() {
    return this.#value;
  }

  #recursion(value, cb, condition) {
    // if (!value.rest) {
    //   cb(value);
    //   return;
    // }
    if (!value.rest) return;
    this.#recursion(value.rest);
  }

  add(addVal) {
    this.#recursion(this.#value, val => {
      val.rest = { value: addVal };
    });
    return this._value;
  }

  // remove(removeVal) {
  //   this.#recursion(this.#value, val => {
  //     const temp =
  //   })
  // }
}

// console.log(ArrayList.listToArray({ value: 1, rest: { value: 2 } }));
console.log(ArrayList.arrayToList([1, 2]));
// const alist = new ArrayList([1, 2]);
// console.log(alist);
// alist.add(3);
