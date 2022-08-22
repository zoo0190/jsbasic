const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: 'Park', dept: 2 },
  { id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map(depts.map(item => [item.dname, item]));
// const empDept = new Map([...deptMap].map(([_, dept]) => ));

// Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(deptMap);

// Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
// console.log(empDept);
