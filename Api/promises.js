// fetch('https://something.com').then().catch().finally()
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})