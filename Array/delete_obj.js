const users = [
  { id: 1, name: 'Hong' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Lee' },
];

const deleteObjectArray = (users, key, value) => {
  if (typeof key === 'number')
    return users.filter(user => user.id !== users[key].id);
  return users.filter(user => user[key] !== value);
};

console.log(deleteObjectArray(users, 2));
console.log(deleteObjectArray(users, 'id', 2)); // Hong, Lee
console.log(deleteObjectArray(users, 'name', 'Lee')); // Hong, Kim
