let readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Hello and welcome! You'll need to create a password thats at least 10 characters long!", function(input){
		
let passwordLength = 10;

if (passwordLength >= 10){
    console.log("Access granted!");
} else {
    console.log("Acces Denied.");
}


reader.close()
});