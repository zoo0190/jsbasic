import { intersect, differ, union } from '../utils/set-utils.js';

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

console.log(intersect(A, B)); // [1, 3, 5]
console.log(intersect(A, C)); // [3, 4]

console.log(differ(A, B)); // [2, 4]
console.log(differ(B, A)); // [22, 44]
console.log(differ(A, C)); // [1, 2, 5]
console.log(differ(B, C)); // [1, 22, 44, 5]

console.log(union(A, B)); // [1, 2, 3, 4, 5, 22, 44]
console.log(union(A, C)); // [1, 2, 3, 4, 5, 11, 222, 555]
