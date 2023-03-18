// const person = {
//     name:'mehedy',
//     email:'xyz@gmail.com',
//     address:'xyz',
//     phone:[12342,76544],
//     34:'hello world',
//     "job-type":'private'
// }

// // 1st way
// const value1 = person.name;
// console.log(value1)

// //2nd way
// const value2 = person['name']
// console.log(value2)

// // 3rd way

// const prop = 'name';
// const value3 = person[prop];
// console.log(value3)


// const p = '34'
// console.log(person[p])

// person['job-type']

const obj = {};

obj.name = 'mehedi';
obj['address'] = 'Bari nai';

const propName = 'phone';

obj[propName] = '234232343'


const keys = Object.keys(obj);
const values = Object.values(obj)

console.log(keys)
console.log(values)

for(let i of keys){
    console.log(obj[i])
}


