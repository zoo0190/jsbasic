import stack from './stack.js';
import queue from './queue.js';

console.log('-------------stack-----------');
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.pop());
stack.print();
stack.clear();

console.log('-------------queue-----------');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
