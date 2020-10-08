var number = 0; // Counter for age
var myAge = 31; // My age

console.log("Silly counting program for Ex2c, with break");
while (number < myAge) {
    number++;
    if ((number > myAge / 2) ) {
        console.log ("Don't ask how old I am")
        process.exit()
        ;
        continue;
    }
    console.log("Age=" + number);
}