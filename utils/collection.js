class Collection {
  #arr;
  constructor(arr = []) {
    this.#arr = arr;
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  get length() {
    return this.#arr.length;
  }

  get peek() {
    if (this.constructor.name === 'Stack') return this.#arr[this.length - 1];
    return this.#arr[0];
  }

  push(val) {
    this.#arr.push(val);
  }

  pop() {
    return this.#arr.pop();
  }

  shift() {
    return this.#arr.shift();
  }

  clear() {
    this.#arr.length = 0;
  }

  toArray() {
    return [...this.#arr];
  }

  print(cb) {
    if (cb) {
      cb([...this.#arr].reverse());
      return;
    }
    console.log(this.#arr);
  }
}

class Stack extends Collection {
  print() {
    super.print(arr => {
      console.log(arr.join('\n'));
    });
  }
}

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

export { Stack, Queue };
