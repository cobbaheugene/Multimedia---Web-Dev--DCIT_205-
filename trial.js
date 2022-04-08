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

// switch is used just like a conditional statement , that is , we use it to execute a block of code.
// the code above simply enables us to print any of the cases 
// our const was red so here it prints dislay red is not part of our case.
// this means we give the code an option what to print .
// if what we want to print is not part of the case, it prints out our default statement which is 'that is an animal'.

// Switch is another conditional stement for testing for multiple statement 
// **assignment** read on switches and write a program

const colours = "pink";
switch (colours) {
    case "pink":
     console.log('Baby girls colour');;
     break ;
    case "Blue" :
     console.log("Chealse football teeam");
     break ;
    case "black":
     console.log ("Official colour");
     break ;
    case "dodger blue":
     console.log ("Tinas favorite colour")
     break ;
    default :
     console.log("Display red");
     break;
}

// === is not only used to test for values but to test for data types as well

// loops repeat themselves
//in the for loop, 3 parameters involved.

// A PROGRAM TO LIST NUMBERS FROM 1 TO 5.. INCREMENTAL 
for (let i=0; i<5; i++){
    console.log(i+1)
}

//without the increment value(i++) you have an infinite loop wich will run saaaaa
//i++ holds the value of the i and adds 1 to the value of i and reassigns it to it to run