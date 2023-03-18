const number = [1,2,3,4,5];


// const newNumber = number;

// newNumber.push(34)
// number.push(55)


// const num = [...number,100];
// num.push(55)
// console.log(number)
// console.log(num)

const person = {
    name:'mehedy',
    address : "Rajshahi"
}
person.email = "xyz"

const newPerson = {...person};

newPerson.phone = '43242'
person.roll = 23
person.name = "hasan"

console.log(person)
console.log(newPerson)