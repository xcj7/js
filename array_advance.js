//  node array_advance.js


// const myArr = []
// %DebugPrint(myArr)

//C:\Users\Tushar\Downloads\css practice\js\array_advance.js


// array 2 types : continious( also called PACKED)  , Holey

/*
continious :
SMI (small integer)
packed Elements
Double (float,sting,function)

Holey :
SMI (small integer)
packed Elements
Double (float,sting,function)

*/


const arrTwo = [1,2,3,4,5,6,7];
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
//PACKED_DOUBLE_ELEMENTS  

arrTwo.push('7');
//PACKED_ELEMENTS

arrTwo[10] = 11 ;
//HOLEY_ELEMENTS

console.log(arrTwo)
console.log(arrTwo.length);
console.log(arrTwo[19]);


//bound check
//arr[100] = 101

//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(object.prototype,10)

//holes are very expensive in js because all kind of prototype will be checked

//SMI > DOUBLE > PACKED 
//HOLED_SMI > HOLED_DOUBLE > HOLED_PACKED

//bad approach
const arrFour = new Array(3)
//just 3 holes . HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS
//good approach
const arrFive = []
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS

const arrSix = [1,2,3,4,5,6]
arrSix.push(NaN)  //PACKED DOUBLE

//for,for-of,forEach use most of the cases 