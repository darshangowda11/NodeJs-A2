const readline = require("readline");
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Please enter your name: ", (data) => {
    console.log(`hey ${data}`);
    r1.close()
});


