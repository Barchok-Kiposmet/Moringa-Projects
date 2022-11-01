// var list = [10, 20, 33, 44]

// for loop condition

for (let i = 0; i < 10; i++) {
    console.log (i);
}

// for-in loop. Used for objests- exit condition must be set

let person = {
    age : 50, height: 150;
}
for (key in person){
    //do something
    console.log (person[key]);
}

// for-of loop. Used for objets

let person = {
    age : 50, height: 150;
}
for (key of person){
    //do something
    console.log (person[key]);

    //while loop- boolean, true or false. Exit condition must be set

        var i = 0
    while(i < 10){
        //do something
        console.log(i);
        i++; // the exit condition
    }

    // function experessions

    function myFunction (numberOne, numberTwo){
        return numberOne + numberTwo
    }

    //function literal

    var myFunctionTwo = function (numberOne, numberTwo){
        return numberOne + numberTwo;
    }
     myFunction(2,3);

    //function 3 arrow function

        var myFunctionTwo = (numberOne, numberTwo) =>{
        return numberOne + numberTwo;
    }

        var myFunctionThree = () => {
            return numberOne + numberTwo;
    }
    // functions that does not accept values
    
        var myFunctionFour = numOne => numberOne + numberTwo;