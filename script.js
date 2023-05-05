// 1
console.log('~~~~~~~Get greeting~~~~~~~~')

function getGreeting(firstName, lastName) {
    return `Hi, "${firstName} ${lastName}". What's up?`;
}
const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?

// 2
console.log('~~~~~~~Is this my name~~~~~~~~')

function isThisMyName(name) {
    return name === "Paweł";
}
console.log(isThisMyName('Adam')); // false
console.log(isThisMyName('Paweł')); // true

// 3
console.log('~~~~~~~Is this boolean~~~~~~~~')

function isThisBoolean(value) {
    return value === true || value === false;
}
console.log(isThisBoolean(true)); // true
console.log(isThisBoolean(false)); // true
console.log(isThisBoolean('true')); // false

// 4
console.log('~~~~~~~Get circle area~~~~~~~~')

function getCircleArea(radius) {
    return Math.PI * (radius ** 2);
}
const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// 5
console.log('~~~~~~Get circles area sum~~~~~~~~~')

function getCirclesAreaSum(radius1, radius2) {
    return getCircleArea(radius1) + getCircleArea(radius2);
}
const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// 6
console.log('~~~~~~Quater of the year~~~~~~~~~')
const quarterOf = (month) => {
    return Math.ceil(month/3);
}
console.log(quarterOf(3)); // 1
console.log(quarterOf(4)); // 2
console.log(quarterOf(9)); // 3
console.log(quarterOf(11)); // 4

// 7
console.log('~~~~~~~Rock, paper, scissors~~~~~~~~')
function rockPaperScissors(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        return 0;
    }
    const rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
    if (playerTwo === rules[playerOne]) {
        return 1;
    }
    return 2;
}
console.log(rockPaperScissors('rock', 'scissors')); // 1
console.log(rockPaperScissors('rock', 'paper')); // 2
console.log(rockPaperScissors('paper','paper')); // 0

console.log('~~~~~~~~~~~~~~~~~~~Additional Exercises~~~~~~~~~~~~~~~~~~~~')
// AE 1
console.log('~~~~~~~~~Rectangle area~~~~~~~~~~')

const rectangleWidth = 25;
const rectangleHeight = 20;
const rectangleArea = rectangleWidth * rectangleHeight;
console.log(rectangleArea); // 500

// AE 2
console.log('~~~~~~Swap~~~~~~~~~')

let firstNumber = 3;
let secondNumber = 17;
console.log('before', firstNumber, secondNumber);
let numberHolder = firstNumber;
firstNumber = secondNumber;
secondNumber = numberHolder;
console.log('after', firstNumber, secondNumber);

// AE 3
console.log('~~~~~~~~Grades~~~~~~~~')

const physicsGrade = 4;
const mathGrade = 5;
const englishGrade = 5;

function averageGrade(grade1, grade2, grade3) {
    return (grade1 + grade2 + grade3) / 3;
}
if (averageGrade(physicsGrade, mathGrade, englishGrade) >= 4) {
    console.log('Good job!');
} else {
    console.log('Try harder!');
}

// AE 4
console.log('~~~~~~~~Hours to minutes~~~~~~~~')

function convertMinutesToHours(minutes) {
    return minutes / 60;
}
const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

// AE 5
console.log('~~~~~~~~Is text uppercase~~~~~~~~')

function isTextUppercase(text) {
    return text === text.toUpperCase();
}
console.log(isTextUppercase('Hello')); // false
console.log(isTextUppercase('HELLO')); // true

// AE 6
console.log('~~~~~~~~Is divisible~~~~~~~~')

function isDivisible(dividend, divisorOne, divisorTwo) {
    return dividend % divisorOne === 0 && dividend % divisorTwo === 0 ;
}
console.log(isDivisible(3,3,4)); // false
console.log(isDivisible(12,3,4)); // true
console.log(isDivisible(8,3,4)); // false
console.log(isDivisible(48,3,4)); // true

// AE 7
console.log('~~~~~~~~Billboard price~~~~~~~~')

function getBillboardPrice(billboardText, pricePerLetter) {
    return billboardText.length * pricePerLetter;
}
console.log(getBillboardPrice('Hello world!', 10)); // 120
console.log(getBillboardPrice('Hello world!', 15)); // 180
console.log(getBillboardPrice('To be, or not to be', 20)); // 380

// AE 8
console.log('~~~~~~~~Opposite number~~~~~~~~')

function oppositeNumber(number) {
    return -1 * number;
}
console.log(oppositeNumber(273)); // -273
console.log(oppositeNumber(-36.6)); // 36.6

// AE 9
console.log('~~~~~~~~Make negative~~~~~~~~')

function makeNegative(number) {
    if ( number > 0 ) {
        return -1 * number;
    }
    return number;
}
console.log(makeNegative(1337)); // -1337
console.log(makeNegative(0)); // 0
console.log(makeNegative(-123)); // -123

// AE 10
console.log('~~~~~~~~Remove First and Last Character~~~~~~~~');

function removeCharacter(string) {
    return string.slice(1,-1);
}
console.log(removeCharacter('eloquent')); // 'loquen');
console.log(removeCharacter('country')); // 'ountr');
console.log(removeCharacter('person')); // 'erso');
console.log(removeCharacter('place')); // 'lac');
console.log(removeCharacter('ooopsss')); // 'oopss');

// AE 11
console.log('~~~~~~~~Basic Mathematical Operations~~~~~~~~');

function basicOperation(operation, valueOne, valueTwo) {
    switch (operation) {
        case '+':
            return valueOne + valueTwo;
        case '-':
            return valueOne - valueTwo;
        case '*':
            return valueOne * valueTwo;
        case '/':
            return valueOne / valueTwo;
        default:
            return 'Not a valid operation';
    }
}
console.log(basicOperation('+', 4, 7)); // 11);
console.log(basicOperation('-', 15, 18)); // -3);
console.log(basicOperation('*', 5, 5)); // 25);
console.log(basicOperation('/', 49, 7)); // 7);
console.log(basicOperation('remove appendix', 49, 7)); // Not a valid operation;

// AE 12
console.log('~~~~~~~~Century From Year~~~~~~~~');

function century(year) {
    return Math.ceil(year / 100);
}
console.log(century(1705)); // 18, 'Testing for year 1705';
console.log(century(1900)); //  19, 'Testing for year 1900';
console.log(century(1601)); //  17, 'Testing for year 1601';
console.log(century(2000)); //  20, 'Testing for year 2000';
console.log(century(89)); //  1, 'Testing for year 89';

// AE 13
console.log('~~~~~~~~Even or Odd~~~~~~~~');

function evenOrOdd(number) {
    if (number % 2) {
        return 'Odd';
    }
    return 'Even';
}
console.log(evenOrOdd(-7)); // Odd
console.log(evenOrOdd(12)); // Even
console.log(evenOrOdd(0)); // Even
console.log(evenOrOdd(111)); // Odd

// AE 14
console.log('~~~~~~~~Are You Playing Banjo~~~~~~~~');

function areYouPlayingBanjo(name) {
    if (name[0].toUpperCase() === 'R') {
        return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo("Adam")); // "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul")); // "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo")); // "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf")); // "rolf plays banjo");

// AE 15
console.log('~~~~~~~~Calculate BMI~~~~~~~~');

function bmi(weight, height) {
    let bmi = weight/(height**2);
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if ( bmi <= 25) {
        return 'Normal';
    } else if ( bmi <= 30) {
        return 'Overweight';
    } else if (bmi > 30) {
        return 'Please don\'t eat me';
    }
}
console.log(bmi(80, 2.80)); // 'Underweight'
console.log(bmi(80, 1.80)); // 'Normal'
console.log(bmi(76, 1.67)); // 'Overweight'
console.log(bmi(180, 1.80)); // 'Please don't eat me'

console.log('~~~~~~end~~~~~~');

