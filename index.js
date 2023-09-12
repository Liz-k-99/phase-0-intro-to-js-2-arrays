const winningNum = (first, secound, third) => {
    return first, secound, third;
};
console.log(winningNum(10,5,8));

const winNum =[4,5,8,9,3,7,5,5,8];
winNum[3];
//above gives access to the elemts through the index which starts at 0
console.log(winNum.length);

let nestedArray = [
    ['indoor','outdoor'],
    ['bad weather', 'sunny'],
    ['bored games', 'outdoor activities'],
];
console.log(nestedArray[0,0],nestedArray[1,0],nestedArray[2,0]);
const names = ['liz', 'sam'];
names.push('rhiannon');
names.unshift('Alison');
console.log(names);
copyOfNames = [...names];
console.log(copyOfNames)
copyOfNames = ['jake', ...names];
copyOfNames = [...names, 'Dylan'];
console.log(copyOfNames);
names.pop();
copyOfNames.shift();
const toDo = ['wake up', 'eat', 'exercise', 'work'];
let copyToDo = toDo.slice(0,3);
console.log(copyToDo);
toDo.slice(1)
console.log(toDo)
copyToDo = [
    ...toDo.slice(0, 2),
    'brush teeth', 'get dressed',
    ...toDo.slice(3),
];

console.log(copyToDo)