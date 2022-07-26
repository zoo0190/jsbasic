// 객체 리터럴 this
const circle = {
  name: 'Yong',
  getDiameter() {
    return this.name;
  },
};

// console.log(circle.getDiameter());

// 메서드 안에서 this 호출
// 콜백으로 this 호출
// 메서드 안에서 또 다른 함수 호출 this
const obj = {
  //   value: 100,
  foo() {
    // console.log("foo's this: ", this);

    function test() {
      console.log('inner Fn: ', this);
    }
    test();

    // const that = this;

    // setTimeout(function () {
    //   console.log("callback's this: ", this);
    // }, 100);
  },
};
obj.foo();

// Arrow 펑션일 때 this
const obj2 = {
  value: 100,
  foo2() {
    // console.log("foo2's this: ", this);

    // const test2 = () => {
    //   console.log('inner inner Arrow Fn: ', this);

    // //   const test3 = () => {
    // //     console.log('hihihi', this);
    // //   };
    // //   test3();
    // };
    // test2();

    // test();

    setTimeout(() => {
      console.log("Arrow callback's this: ", this);
    }, 100);
  },
};

// obj2.foo2();

const testObj = {
  name: 'Yong',
};

const thisTest = function (a, b, c, d) {
  return `my name is ${this.name}`;
};

// thisTest();
// console.log(thisTest.call(testObj, 1, 2, 3));
// console.log(thisTest.apply(testObj, [1, 2, 3]));
const bindFn = thisTest.bind(testObj);
console.log(bindFn());
// console.log(bindFn);
