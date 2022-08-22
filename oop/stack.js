import Collection from './collection.js';

class Stack extends Collection {
  print() {
    super.print(arr => {
      console.log(arr.join('\n'));
    });
  }
}

const stack = new Stack();

export default stack;
