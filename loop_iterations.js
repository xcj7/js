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