//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toLocaleString());


let myCreatedDateTimeTwo = new Date("2023-01-14");
console.log(myCreatedDateTimeTwo.toLocaleString());


let myCreatedDateTimeThree = new Date("01-14-2023");
console.log(myCreatedDateTimeThree.toLocaleString());


// let myCreatedDateTime1= new Date("14-01-2023");
// console.log(myCreatedDateTime1.toLocaleString());


let mytimestamp = Date.now()
console.log(mytimestamp);  // output in milisecond
console.log(myCreatedDate.getTime()); // output in milisecond
console.log(Math.floor(Date.now()/1000)); // output in second

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time `)


newDate.toLocaleString('default',{
    weekday:"long"
})
