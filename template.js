const person = {
    name:'mehedy',
    email:'xyz@gmail.com',
    address:'xyz',
    phone:[12342,76544,34343],
}

// console.log('my name is '+ person.name+'\n my email '+person.email)

const information = `My name is ${person.name}
My email is ${person.email}
My numbers ${person.phone.forEach(n => n)}
`;
console.log(information)