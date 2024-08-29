//for
array=[0,1,2,3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == 5 )
    {
        console.log(` {element}`)
    }

    for(let j=0;j < 6;j++ )
    {
        console.log(`inner loop value ${j}`);
        console.log(index+'*'+j+'='+index*j);

    }
    console.log(element)
    
}  



//////////////

for (let index = 0; index < 20; index++) {
    const element = index;
    if (element == 5 )
    {
        console.log(` breaking ${element}`)
        break;
    }

    if (element == 3 )
        {
            console.log(` continue  ${element}`)
            continue;
        }
}


/////////////////////
// forEach
const coding =["js","ruby","java","python","cpp"]

coding.forEach(  function(item){
    console.log(item);
}

)
////
coding.forEach(
    (i)=>{
        console.log(i);
    }
)

////
console.log("<<<<<<<<>>>>>>>>")
function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)
console.log("<<<<<<<</////>>>>>>>>")
////

coding.forEach(  (item,index,array)=>{
console.log(item,index,array)

}    )

///////

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Ruby",
        languageFileName:"rb"
    }
]
////////////////   call back  funtion  (item)  // no function name is needed
myCoding.forEach((item)=>{
    console.log(item.languageName);
})


