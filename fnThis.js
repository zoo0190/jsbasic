// const obj = {
//   name: 'ObjName',
//   bark() {
//     // good!(호출한 객체)
//     console.log('bark=', this.name, this);
//   },
//   bark2: () =>
//     // bad!!
//     console.log('bark2=', obj.name, this),
// };

// obj.bark();
// obj.bark2();

// this 메모리에 방이 잡힌 그곳을 가르킨다......!

const Dog = function (name) {
  console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () => console.log('bark2=', new.target, this.name, name);
};

const dog = Dog('Doggy');
const lucy = new Dog('Lucy');
bark(); // ?
console.log('------');
bark2();
lucy.bark(); // ?
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy); // ?
