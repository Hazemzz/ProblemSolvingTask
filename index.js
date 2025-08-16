// 1- Write a program that allow to user enter number then printit

function checkValidNumber() {
    var number = Number(window.prompt("Enter a number:"));

    if (number !== number) {
        window.alert("Invalid input. Please enter a valid number.");
    } else {
        window.alert("You entered: " + number);
    }
}
// checkValidNumber();


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
function isDivisibleByThreeAndFour() {
    var number = Number(window.prompt("Enter a number:"));

    if (number !== number) {
        window.alert("Invalid input. Please enter a valid number.");
    } else if (number % 3 == 0 && number % 4 == 0) {
        window.alert("Yes");
    } else {
        window.alert("No");
    }
}
// isDivisibleByThreeAndFour();

// 3- Write a program that allows the user to insert 2 integers then print the max

function printMaxNumber() {
    var firstNumber = Number(window.prompt("Enter first number:"));
    var secondNumber = Number(window.prompt("Enter second number:"));

    var max;

    if (firstNumber !== firstNumber || secondNumber !== secondNumber) {
        window.alert("Invalid input. Please enter a valid number.");
    } else if (firstNumber > secondNumber) {
        window.alert(max = firstNumber);
    } else if (secondNumber > firstNumber) {
        window.alert(max = secondNumber);
    }
}
// printMaxNumber();


// 4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
function checkNumberSign() {
    var number = Number(window.prompt("Enter number:"));

    if (number !== number) {
        window.alert("Invalid input. Please enter a valid number.");
    } else if (number > 0) {
        window.alert("Positive");
    } else if (number < 0) {
        window.alert("Negative")
    } else {
        window.alert(0)
    }
}
// checkNumberSign();


// 5- Write a program that take 3 integers from user then print the max element and the min element.
function printMaxMinNumber() {
    var firstNumber = Number(window.prompt("Enter first number:"));
    var secondNumber = Number(window.prompt("Enter second number:"));
    var thirdNumber = Number(window.prompt("Enter third number:"));

    if (firstNumber !== firstNumber || secondNumber !== secondNumber || thirdNumber !== thirdNumber) {
        window.alert("Invalid input. Please enter a valid number.");
        return;
    }

    var max = firstNumber;
    if (secondNumber > max) {
        max = secondNumber;
    }
    if (thirdNumber > max) {
        max = thirdNumber;
    }
    window.alert(max);

    var min = firstNumber;
    if (secondNumber < min) {
        min = secondNumber
    }
    if (thirdNumber < min) {
        min = thirdNumber
    }
    window.alert(min);

}
// printMaxMinNumber();


//6- Write a program that allows the user to insert integer number then check If a number is oven or odd
function checkEvenOrOdd() {
    var number = Number(window.prompt("Enter number:"));

    if (number !== number) {
        window.alert("Invalid input. Please enter a valid number.");
    } else if (number % 2 == 0) {
        window.alert("It's even");
    } else {
        window.alert("It's odd")
    }
}
// checkEvenOrOdd();

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
function isVowelOrConstant() {
    var char = window.prompt("Enter a character:");

    if (char === 'a' || char === 'i' || char === 'e' || char === 'u' || char === 'o') {
        window.alert("It's Vowel");
    } else {
        window.alert("It's Consonant");
    }
}
// isVowelOrConstant();

//10- Write a program that allows user to insert integerthen print a multiplication table up to 12.
function getmultiplication() {
    var number = Number(window.prompt("Enter number:"));

    if (number !== number) {
        window.alert("Invalid input. Please enter a valid number.");
    }

    for (let index = 1; index <= 12; index++) {
        console.log(number * index);
    }
}
getmultiplication();