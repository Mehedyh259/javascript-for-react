
const myFunction = (x,fun) => {
    console.log(x);
    fun()
} 

const demo = () => {
    console.log('hello')
}


myFunction(5,demo)