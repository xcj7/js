//array
const myArr = [0,1,2,3,4,5,true,"hitesh"]

console.log(myArr[0]);
console.log(myArr[7]);
console.log(myArr[6]);

const myheros = ["a","b"];
const myArr2=new Array(1,2,3,4)
console.log(myArr2[0])

//Array methods
myArr.push(6)
myArr.push("Tushar")
myArr.push(7)
myArr.pop()

myArr.unshift(9);
myArr.shift();
myArr.unshift(8);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
// const newArr=myArr.join()
// console.log(newArr);


console.log("A",myArr);
const myn1=myArr.slice(1,3)  // don't cut the purtion from the main array ,
                             // don't give the last range 


console.log(myn1);
console.log("//////////////////////////////////////");

const myn2=myArr.splice(1,3)  // cut the purtion from the main array 
                             //  give the last range  
console.log(myn2);
console.log(myArr);

console.log('****************************')
a=['a','b','c','d']
b=['e','f','g','h','i']

a.push(b)  

console.log(a)
console.log(a[4][1])

const c=a

c.concat(b)  // concatination 
console.log(c)

const all=[...a,...b] // spread operator , spreading every array element 
console.log(all);
console.log('//////////////////////////////////////////')
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)   //featch value from every array in to one array
console.log(real_another_array);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log('///////////////////////////>>>>>>>/////')
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"hitesh"})) // out put : []  because it need to be more specified ,is it value or key need to be arrayfied  // interesting interview Question

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))  //Output : [ 100, 200, 300 ]