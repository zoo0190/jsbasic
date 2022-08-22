import Collection from './collection.js';

class Queue extends Collection {
  enqueue(val) {
    super.push(val);
  }

  dequeue() {
    return super.shift();
  }

  print() {
    super.print(arr => console.log('->', arr.join(', '), '->'));
  }
}

const queue = new Queue();

export default queue;
