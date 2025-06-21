const accountID = 14443
let accountEmail = "sopham@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountID = 444 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "2121"
accountCity = "Chandur"
/*
prefer not to use var because
of issue of block scope and functional scope
*/

console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])