// const num = [1,2,3,4,5];

// const first = num[0];
// const second = num[1]

// const [first,second,third]= num;
// console.log(first,second,third)

// const obj = {
//     name: 'x',
//     roll:123,
//     address:'rajshahi'
// }

// const {name,roll,address} = obj

// console.log(name,roll,address)

const num = [1,2,3,4,5];


const [a,b,...rest] = num

console.log(rest)