const coding =["js","ruby","java","python","cpp"]

const values = coding.forEach( (item) =>
{
    console.log(item);

} )

console.log(values);  // forEach don't return any value .


const myNums=[1,2,3,4,5,6,7,8,9,10]
const newnums = myNums.filter ( (num) => num > 5) //filter accepts callback functions .
console.log(newnums)  // filter returns value .


const newNums = myNums.filter((num) => {
    return num > 4   // if you use {} then there is a need ,to use 
                    // return statement . 
})
////////////////////////////////
console.log("////////////////////////////")
const newNums1 = [1,2,3,4,5,6,7,8,9,10]
const newNums2=[]
newNums1.forEach((num)=> {
    if(num > 5 ) {
        newNums2.push(num)
    }
}
)

console.log(newNums2);

////////////////////////////////

const books = [
    {title:'Book 1',genre:'Fiction',publish:1981,edition:2004},    
    {title:'Book 2',genre:'Fiction',publish:1981,edition:2005},
    {title:'Book 3',genre:'Fiction',publish:1981,edition:2006},
    {title:'Book 4',genre:'Fiction',publish:1981,edition:2007},
    {title:'Book 5',genre:'Fiction',publish:1981,edition:2008},
    {title:'Book 6',genre:'Fiction',publish:1981,edition:2009},
    {title:'Book 7',genre:'Fiction',publish:1981,edition:2010},
    {title:'Book 8',genre:'Fiction',publish:1981,edition:2011},
    {title:'Book 9',genre:'Fiction',publish:1981,edition:2012},
    {title:'Book 10',genre:'Fiction',publish:1981,edition:2013},
    {title:'Book 11',genre:'Fiction',publish:1981,edition:2014}

] 