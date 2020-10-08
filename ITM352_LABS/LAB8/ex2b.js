var number = 0; // Counter for age
var myAge = 31; // My age

console.log("Silly counting program for Ex2b, with break");
while (number < myAge) {
    number++;
    if ((number >= myAge / 2) && (number <= myAge * 3 / 4)) {
        console.log ("No age zone");
        continue;
    }
    console.log("Age=" + number);
}