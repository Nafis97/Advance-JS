const student = [
    {id: 21, name: 'Shadman'},
    {id: 24, name: 'Samayel'},
    {id: 27, name: 'Nawal'},
    {id: 28, name: 'Ishrak'}
];

const names = student.map(element => element.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id> 24)
console.log(names);
console.log(ids);
console.log(bigger);