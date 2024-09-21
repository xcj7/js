// fetch('https://something.com').then().catch().finally()
// node Api\promises.js     // to execute the js file in vs terminal .

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() //resolve() calling execute the .then() part
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

//////////////////////////////////////////////////////////////////
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}
).then(function(){
    console.log("Async 2 resolved")
} )


//////////////////////////////////////////////////////////////////

const promiseThree = new Promise(function(resolve,reject)
{
setTimeout(function(){

    resolve({
        username:"chai",
        email:"abc@gmail.com"

    })
},1000);
}
)

promiseThree.then(function(user){
    console.log(user.email)

})

//////////////////////////////////////////////////////////

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
       //let error = true;
       let error = false;
       if(!error){
        resolve({
                username:"chai",
                email:"abc@gmail.com"
        
            })
       }else {
        reject('ERROR:Something went wrong .')
       }
        
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;

}).then((username)=>{
console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log(" finally will be always be executed as default .  "  )
)

///////////////////////////////////////////////////////////////////////////////

promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve(
                {username:"javascript",
                password:"123"

            })
        }else{
            reject('Error : Js went wrong 1 .')
        }
        
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    }catch(error){
        console.log(error)
    }
    
}


consumePromiseFive()


////////////////////////////////////////////////
console.log("////////////////////////////////////////  1   //////////////////////////////////////////")

//1

async function getAllUsers(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    const data = await response.json()
    console.log(data)
  }catch(error){
    console.log("E: ",error);
  }
}


 getAllUsers()

////////////////////////////////  

//2


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("////////////////////////////////////////  2   //////////////////////////////////////////")
    console.log(data);
})
.catch((error)=>console.log(error))


//1 and 2 are doing the same tasks