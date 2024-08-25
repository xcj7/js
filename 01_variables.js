console.log("Hitesh Tushar") 
const accountId =  144553
let accountEmail = "hitesh@google.com"
var accountPassword ='12345'

// accountId=2   // not allowed
console.log(accountId);

accountEmail="hc@hc.com"
accountPassword="22222222222"
accountCity="Bengaluru"
let accountState;

console.table([accountId,accountEmail,accountPassword, accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/