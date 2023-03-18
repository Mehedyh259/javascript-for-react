// const obj = {
//     name: 'something',
//     roll:23
// }
// const json = JSON.stringify(obj);
// console.log(json);

// const object = JSON.parse(json)
// console.log(object)


// api fething 1. json file,, url

// fetch async await

fetch('url')
.then(res => res.json())
.then(data => console.log(data))


const api = async() => {
    const res = await fetch('url');
    const data = await res.json()
    console.log(data)
}