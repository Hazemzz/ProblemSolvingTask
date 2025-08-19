// 1- Write a program that allow to user enter number then printit
function checkValidNumber() {
    var number = Number(window.prompt("Enter a number:"));

    if (number !== number) {
        window.alert("Invalid input. Please enter a valid number.");
    } else {
        window.alert("You entered: " + number);
    }
}
checkValidNumber();


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
// getmultiplication();


// 11: write a program that take two integers then print the power.
function calculatePower() {
    var x = window.prompt("enter an integer");
    var y = window.prompt("enter another integer");

    if (x === "" || y === "" || x === null || y === null) {
        window.alert("please enter an integer");
        console.log("pleser enter an integer");
        return;
    }

    var x = number(x);
    var y = number(y);

    if (x !== x || y !== y || x % 1 !== 0 || y % 1 !== 0) {
        window.alert("please enter valid integer");
        console.log("please enter valid integer");
    } else {
        window.alert(x ** y);
        console.log(x ** y);
    }
}
// calculatePower();


//12: write a program to enter marks of five subjects and calculate total, average and percentage.
function calculateTotalAveragePercentage() {
    var totalmarks = 0;
    var subjectcount = 5;
    var maxmarkspersubject = 100;

    for (var i = 1; i <= subjectcount; i++) {
        var input = window.prompt(`enter marks for subject ${i} :`);
        var marks = number(input);

        if (input === null || input === "" || marks !== marks || marks < 0 || marks > maxmarkspersubject) {
            window.alert("please enter marks between 0 and " + maxmarkspersubject);
            console.log("please enter marks between 0 and " + maxmarkspersubject);
            return;
        }

        totalmarks = totalmarks + marks;
    }

    var average = totalmarks / subjectcount;
    var percentage = (totalmarks / (subjectcount * maxmarkspersubject)) * 100;

    console.log("total marks= " + totalmarks);
    console.log("average marks= " + average);
    console.log("percentage= " + percentage + "%");
    window.alert("total marks= " + totalmarks);
    window.alert("average marks= " + average);
    window.alert("percentage= " + percentage + "%");
}
// calculateTotalAveragePercentage();


//13: write a program to input month number and print number of days in that month.
function getDaysInMonth() {
    var input = prompt("enter month number (1-12):");
    var month = number(input);

    if (month !== month || month < 1 || month > 12) {
        console.log("please enter a number between 1 and 12.");
        window.alert("please enter a number between 1 and 12.");
        return;
    }

    var days = 0;

    for (var i = 1; i <= 12; i++) {
        if (i === month) {
            if (i === 2) {
                days = 28;
            } else if (i === 4 || i === 6 || i === 9 || i === 11) {
                days = 30;
            } else {
                days = 31;
            }
        }
    }

    console.log("days in month: " + days);
}
// getDaysInMonth();


//14: write a program to input marks of five subjects physics, chemistry, biology, mathematics and computer, find percentage and grade.
function calculatePercentageAndGrade() {
    var totalmarks = 0;
    var subjects = ["physics", "chemistry", "biology", "mathematics", "computer"];
    var maxmarkspersubject = 100;

    for (var i = 0; i <= 4; ++i) {
        var input = window.prompt(`enter marks for subject ${subjects[i]} :`);
        var marks = number(input);

        if (input === null || input === "" || marks !== marks || marks < 0 || marks > maxmarkspersubject) {
            window.alert("please enter marks between 0 and " + maxmarkspersubject);
            console.log("please enter marks between 0 and " + maxmarkspersubject);
            return;
        }

        totalmarks = totalmarks + marks;
    }

    var percentage = (totalmarks / (5 * maxmarkspersubject)) * 100;
    var grade;
    if (percentage >= 90) {
        grade = "a";
    } else if (percentage >= 80) {
        grade = "b";
    } else if (percentage >= 70) {
        grade = "c";
    } else if (percentage >= 60) {
        grade = "d";
    } else if (percentage >= 40) {
        grade = "e";
    } else {
        grade = "f";
    }

    console.log("percentage= " + percentage + " %" + " and your grade: " + grade);
    window.alert("percentage= " + percentage + " %" + " and your grade: " + grade);
}
// calculatePercentageAndGrade();


//15: write a program to print total number of days in month.
function printDaysInMonth() {
    var month = number(window.prompt("please enter month number (1-12)"));

    switch (month) {
        case 1:
            console.log("january has 31 days.");
            break;
        case 2:
            console.log("february has 28 days.");
            break;
        case 3:
            console.log("march has 31 days.");
            break;
        case 4:
            console.log("april has 30 days.");
            break;
        case 5:
            console.log("may has 31 days.");
            break;
        case 6:
            console.log("june has 30 days.");
            break;
        case 7:
            console.log("july has 31 days.");
            break;
        case 8:
            console.log("august has 31 days.");
            break;
        case 9:
            console.log("september has 30 days.");
            break;
        case 10:
            console.log("october has 31 days.");
            break;
        case 11:
            console.log("november has 30 days.");
            break;
        case 12:
            console.log("december has 31 days.");
            break;
        default:
            console.log("invalid month number. please enter a number between 1 and 12.");
            window.alert("invalid month number. please enter a number between 1 and 12.");
    }
}
// printDaysInMonth();


//16: write a program to check whether an alphabet is vowel or consonant.
function checkAlphabetVowelOrConsonant() {
    var char = prompt("enter a single alphabet character:");

    if (char < 'a' || char > 'z' || char === null || char === "") {
        window.alert("please enter a single alphabet letter.");
        return;
    }

    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            window.alert(char + " is a vowel.");
            break;
        default:
            window.alert(char + " is a consonant.");
    }
}
// checkAlphabetVowelOrConsonant();


//17 write a program to find maximum between two numbers
function findMaxBetweenTwoNumbers() {
    var x = +window.prompt("enter first number");
    var y = +window.prompt("enter second number");

    switch (true) {
        case x > y: window.alert("maxnumber= " + x);
            break;
        case x === y: window.alert("numbers are equal");
            break;
        default:
            window.alert("maxnumber= " + y);
    }
}
// findMaxBetweenTwoNumbers();


//18 write a program to check whether a number is even or odd
function checkEvenOrOdd() {
    var x = +window.prompt("enter number");

    switch (true) {
        case x % 2 === 0:
            window.alert("even")
            break;
        default:
            window.alert("odd")
    }
}
// checkEvenOrOdd();


//19 write a program to check whether a number is positive or negative or zero
function checkNumberSign() {
    var x = +window.prompt("enter number");
    switch (true) {
        case x > 0:
            window.alert("positive");
            break;
        case x === 0:
            window.alert("yournumberis zero");
            break;
        default:
            window.alert("negative");
    }
}
// checkNumberSign();


//20 write a program to create simple calculator
function simpleCalculator() {
    var x = +window.prompt("enter first number");
    var operator = window.prompt("enter operator (+, -, *, /)");
    var y = +window.prompt("enter second number");

    switch (operator) {
        case "+":
            window.alert("result = " + (x + y));
            break;

        case "-":
            window.alert("result = " + (x - y));
            break;

        case "*":
            window.alert("result = " + x * y);
            break;

        case "/":
            if (y === 0) {
                window.alert("cannot divide by zero!");
            } else {
                window.alert("result = " + x / y);
            }
            break;

        default:
            window.alert("invalid operator");
    }
}
// simpleCalculator();
