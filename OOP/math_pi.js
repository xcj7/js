const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter)

// console.log(Math.PI);
// Math.pI = 5
// console.log(Math.PI)


//node OOP\math_pi.js


const chai = {
    name:'ginger chai',
    price:250,
    isAvailable: true,

    orderChai:function(){
        console.log('chai nahi bani');
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
}
)
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} | ${value}`)    
    }
    // console.log(`${key} | ${value}`)
}

