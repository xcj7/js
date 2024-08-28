// Immediately Invoked Function Expressions IIFE

(function chai(name){
    //named IIFE
    console.log(`DB Connected`);
}
    
)(); // ; is neccessery heare 

((name)=>{
    //simple IIFE
    console.log(`DB Connected Two from ${name}`);
}

)('hitesh');