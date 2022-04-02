// Conditional Statements //

// ?  Declare the variable
var x = 7

if(x==7){
    console.log("X is Seven")
}
else{
    console.log("X is not Seven")
}

// To test for multiple conditons we use the keyword else if
//they all terminate with an else statement
var x=6
if(x==4){
    console.log("X is four")
}
else if(x==6){
    console.log("X is Six")
}
else{
    console.log("No condition was met!")
}

// Switch is another conditional stement for testing for multiple statement 
// **assignment** read on switches and write a program

// === is not only used to test for values but to test for data types as well

// loops repeat themselves
//in the for loop, 3 parameters involved.

// A PROGRAM TO LIST NUMBERS FROM 1 TO 5.. INCREMENTAL 
for (let i=0; i<5; i++){
    console.log(i+1)
}

//without the increment value(i++) you have an infinite loop wich will run saaaaa
//i++ holds the value of the i and adds 1 to the value of i and reassigns it to it to run