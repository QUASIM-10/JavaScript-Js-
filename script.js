// ASSIGN VALUE TO A VARIABLE
var myname1 = "Adeyanju";
// TO ACCEPT USER INPUT IN JAVASCRIPT, USE THE prompt KEYWORD AND ASSIGN IT TO A VARIABLE
var myname = prompt("what is your name:");
// THIS IS A COMMENT: TO CHANGE the value of the variable assigned to myname1; DO THE FFG:
myname1 = "ADEYEMI" // HENCE THE value OF myname1 IS NOW ADEYEMI
// USE THE alert KEYWORD TO DISPLAY CONTENT ON THE WEBPAGE
alert(myname1); // ADEYEMI ;; WILL BE DISPLAYED ON THE WEBPAGE.
alert("My name is ADEYANJU QUASIM"); // My name is ADEYANU QUASIM ;; WILL BE DISPLAYED ON THE WEBPAGE
alert("My Name is " + myname1 + " " + myname + ", Welcome to the Course " + myname + "!");
var gamelevel = 1;
gamelevel = 2;
gamelevel = 3;
alert("Your Gamelevel is: " + gamelevel);

// YOU CAN ALWAYS GO TO THE CONSOLE TO ACCESS THE VALUES OF STORED VARIABLE E.G IF I TYPE IN myname1 IN THE CONSOLE, ADEYEMI WILL BE DISPLAYED.

// TO INITIALIZE NEXT LINE IN JS, USE THE \n:
console.log("HELLO, \nQUASIM");

/*
IN JAVASCRIPT, const IS A KEYW0RD USED TO DECLARE A VARIABLE THAT IS block-scoped AND WHOSE VALUE IS CONSTANT WITHIN THAT BLOCK MEANING IT CANNOT BE REASSINGED AFTER IT'S INITIAL ASSIGNMENT.

NaN: MEANS Not a Number
Integers, positive numbers, Negative Numbers, and decimal numbers(floats) HAVE THE SAME DATATYPE IN JAVAVSCRIPT KNOWN AS Number.
    NOTE: NaN IS ALSO A Number I.E typeof(NaN) = Number 
    0/0 = NaN, 20 + 0/0 = NaN.
*/

var a = "5";
var b = "3";
// SWITCH the values that are held in two variables around
var c = a; // I.E c = "5"
a = b; // I.E a = "3"
b = c; // I.E b = "5"
console.log("a is " + a);
console.log("b is " + b);

var name = "Lolade";
var message = "Hello";
alert(message + " there, " + name);

// Len: TO FIND THE LENGTH OF CHARACTERS IN A WORD
var name = "Adeyanju";
name.length // 8 ;; WILL BE DISPLAYED.

/* WRITE A JAVASCRIPT CODE THAT WILL SHOW THE NUMBER OF CHARACTERS WRITTEN AND THE NUMBER OF CHARACTERS LEFT FOR A TWEET
ASSUMING THE MAX LENGTH IS 200 CHARACTERS; */
var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (200 - tweetCount) + " characters remaining.");
/* FROM THE ABOVE CODE, WE CAN SEE THAT WE HAVE CREATED A NEW VARIABLE tweetCount WHICH IS RESPONSIBLE FOR HOLDING THE tweet LENGTH.
WE CAN DO AWAY WITH THAT LINE OF CODE AND DIRECTLY APPLY tweet.length INSIDE THE alert("....."), see next line for clarification...
    alert("You have written " + tweet.length + " characters, you have " + (200 - tweet.length) + " characters remaining."); */

// HIGHLIGHT THE CODE YOU WANT TO COMMENT AND THEN PRESS CTRL + / TO COMMENT THAT/THOSE LINE(S) OF CODE

// NOTE: INDEXING START FROM 0 IN PROGRAMMING NOT 1.

/* SLICING AND EXTRACTING PARTS OF A STRING: USE THE .slice(lowerbound, upperbound);
E.G if name = "Angela" name.slice(0,1) = "A" */
"breadwinner".slice(0,6); /* MEANING: TAKE THE ENTIRE SLICE BETWEEN POSITION 0 AND UP TO BUT NOT INCLUDING POSITION 6 HENCE "breadw" WILL BE DISPLAYED */
"BREAD".slice(1); // 'READ' WILL BE DISPLAYED (THE FIRST LETTER(INDEX 0) WILL NOT BE DISPLAYED.
"Bread".slice(2); // I.E START DISPLAYING FROM THE 2ND INDEX TO THE LAST, HENCE, 'ead' WILL BE DISPLAYED.
var na = "Angela";
na.slice(0,1); // 'A' WILL BE DISPLAYED BECAUSE THE LOWERBOUND(0) WHICH IS 'A' IS DISPLAYED AND THE UPPERBOUND(1) IS IGNORED
// IN SHORT, IT WILL DISPLAY ALL THE CHARACTERS STARTING FROM THE LOWERBOUND BUT IGNORE CHARACTERS STARTING FROM THE UPPERBOUND.
na.slice(0,4); // 'Ange' WILL BE DISPLAEYD(DISPLAY CHARACTER 0,1,2,3 = Ange).
na.slice(2,5); // 'gel' WILL BE DISPLAYED(DISPLAY CHARACTER 2,3,4 = gel).

// WE WILL MANIPULATE OUR TWEET CODE TO ONLY DISPLAY THE FIRST 200 CHARACTERS IRRESPECTIVE OF WHAT THE USER HAS TYPED IN.
var twet = prompt("Write your tweet: ");
var twet1 = twet.slice(0,200);
alert(twet1); // HERE, ONLY THE FIRST 200 CHARACTERS WILL BE DISPLAYED HEREBY LEAVING OUT THE REMAINING....
// THE 3 LINES ABOVE CAN BE WRITTEN AS:
alert(prompt("Enter your tweet: ").slice(0,200));

// CHANGING CASING IN TEXT: UPPERCASE, LOWERCASE
// RECALL THAT WE HAVE DECLARED var na = "Angela";
var nn = na.toUpperCase() // 'ANGELA' IS DISPLAYED..
nn.toLowerCase() // 'angela' IS DISPLAYED.

// STRING LITERALS : APPLICATION OF F-STRING(PYTHON) IN JAVASCRIPT.
let e_30 = "Cement"
let e_31 = 6500
let e_32 = 10
// NORMAL METHOD:
console.log("You bought " + e_32 + " " + e_30 + ". Total is: " + e_31 * e_32);

// USING THE back-tick (` ... ${} ....`) IN PLACE OF f-string(Python) IN JavaScript
console.log(`Hello Motherfuckers ${1+4+7*4}`) // Hello Motherfuckers 33 WILL BE DISPLAYED MEANING THAT ${1+4+7*9} WILL BE EVALUATED AND THE RESULT WILL BE CONCATENATED WITH THE SENTENCE BEFORE.
console.log(`You bought ${e_32} ${e_30}. Total is: ${e_31 * e_32}`)
// USE ${} TO INCLUDE A TEXT OR CALCULATION THAT IS OUTSIDE OF THE `` FUNCTION.

/* WRITE A PROGRAM THAT ALLOWS USER TO INPUT THEIR THEIR NAME AND 
DISPLAY THE OUTPUT AS FIRSTLETTER(CAPITAL LETTER) AND THE REST(SMALL LETTERS) */
var yourname = prompt("What is your name: ");
alert("Hello, " + yourname.slice(0,1).toUpperCase() + yourname.slice(1).toLowerCase());
// yourname.slice(1).toLowerCase() I.E CONVERT ALL THE LETTERS STARTING FROM THE 2ND LETTER(INDEX 1) TILL THE END TO lowercase.

// BASIC ARITHIMETIC : ARITHIMETIC IN PROGRAMMING IS FOLLOWED BY USING THE PEMDAS FORMULA
// P = PARENTHESIS E = EXPONENTIAL M = * D = / A = + S = -
// OTHER OPERATORS INCLUDE MODULO = %, <, >, <= >= E.T.C
12+6;
34-10;
12/4;
12%5; // 2 IS DISPLAYED  I.E REMAINDER OF 12 WHEN DIVIDED BY 5...
12 > 5; // true WILL BE DISPLAYED
1 < 5; // true 
1 == 1; // true BECAUSE 1 IS EQUAL TO 1
20 <= 15; // false 
12 >= 14; // false

var age = prompt("YOUR Dog's Age: ");
var humanAge = (age - 2) * 4 + 21;
alert(humanAge);

// INCREMENT AND DECREMENT:
var x = 5;
x += 1; // INCREMENT x BY 1 : 5 + 1 =  6
x -= 3; // DECREMENT x BY 3 : 6 - 3 = 3

var y = 10;
var z = 5;
y *= z; // I.E 10 * 5 = 50.
y /= z; // I.E 50 / 5 = 10.


// DIFFERENCE BETWEEN alert AND console.log:
/* alert is visible to both user and developer and it is displayed on the webpage itself but
console.log is only for the developer and it is shown in the console. */

// Functions: CREATING AND CALLING FUNCTIONS:
/* 
WHEN DEALING WITH functions, USE return AHEAD OF console.log BECAUSE return affects the program
by providing a value back to the caller meaning that we can assign a variable to the returned VALUE 
But When console.log is being used, we cannot assign a variable to the printed value 
*/
function func(x,y) {
    console.log(x + y);
}
func(20,20); // 40 WILL BE DISPLAYED.

var word1 = "Hello";
var word2 = "World!";
function word(word1, word2){
    console.log(word1 + word2);
}
word(word1, word2); // HelloWorld! WILL BE DISPLAYED.
word(word1 = "Bye", word2); // ByeWorld WILL BE DISPLAYED
word(word1 = "Rice", word2 = " and beans"); // Rice and beans WILL BE DISPLAYED

// USE THE Math.floor() TO ROUND DOWN VALUES.
function amount(value){
    var total = Math.floor(value / 1.5);
    console.log("Buy " + total + " bottles of milk");
}
amount(75);

/* CREATE A FUNCTION THAT TELLS US HOW MANY DAYS, WEEKS AND MONTHS WE HAVE LEFT IF WE LIVE UNTIL 90 YEARS
IT WILL TAKE YOUR CURRENT AGE AND PRINT SOMETHING LIKE 365 DAYS, 52 WEEKS AND 12 MONTHS. */
function yearsRemaining(age){
    var remain = 90 - age;
    var daysRem = remain * 365;
    var weeksRem = remain * 52;
    var monthsRem = remain * 12;

    console.log("You have " + monthsRem + " Months, " + weeksRem + " Weeks and " + daysRem + " Days remaining");
};
yearsRemaining(12); // You have 936 Months, 4056 Weeks and 28470 Days remaining WILL BE DISPLAYED.

// parseInt: THIS IS USED TO CONVERT A PIECE OF STRING INTO A NUMBER. IT WILL LOOK THROUGH THE SENTENCE AND DISPLAY ONLY THE INT PRESENT IN SUCH TEXT OR SENTENCE.
let e_33 = parseInt(prompt("ENTER A NUMBER: "))
// IF WE DO NOT INCLUDE THE parseInt, THEN THE USER INPUT WILL BE DISPLAYED IN STRING FORMAT E.G "65"

// WRITE A FUNCTION TO ACCEPT 2 INTEGER USER INPUT AND COMPUTE THE SUM OF THE 2 INTEGERS
let number1 = parseInt(prompt("Enter First Number: "));
let number2 = parseInt(prompt("Enter Second Number: "));
function func(qq, ee) {
    return qq + ee;
}
let sum = func(number1,number2);
alert("The sum is " + sum);
console.log("The sum is " + sum);

// ACCEPT 3 USER INPUT AND THEN ADD THE 1ST AND 2ND NUMBER AND THEN MULIPLY IT WITH THE 3RD NUMBER
let nn = parseInt(prompt("Enter 1st Number: "));
let nb = parseInt(prompt("Enter 2nd Number: "));
let nm = parseInt(prompt("Enter 3rd Number: "));

function nv(z,x,c){
    return (z + x) * c;
}
let nh = nv(nn,nb,nm);
console.log("(" + nn + " + " + nb + ")" + " * " + nm + " = " + nh);

// USE THE .toFixed(number of d.p) TO ROUND UP VALUES TO ANY D.P OF YOUR CHOICE.

// WRITE A BMI CALCULATOR FUNCTION: BMI = weight(kg)/height^2(m^2)
// SHOULD NOT ALLOW USER INPUT ===>
function BMI(weight, height){
    var metre = height * 0.305;
    var BMIvalue = (weight / (metre ** 2)).toFixed(2);
    console.log("Your BMI IS: " + BMIvalue);
}
BMI(65, 6.2);

// ACCEPT USER INPUT AND THEN USE THE VALUE TO CALCULATE THE BMI
let weight1 = parseFloat(prompt("Enter your Weight (Kg): "));
let height1 = parseFloat(prompt("Enter your Height (ft): "));
function BMI_user(weight, height){
    var metre = height * 0.305;
    var BMIvalue = (weight / (metre ** 2)).toFixed(2);
    return BMIvalue;
}
let BMI_result = BMI_user(weight1, height1);
alert("Your BMI IS " + BMI_result);

// CREATE A FUNCTION THAT ALLOWS 2 INPUT WHERE THE FIRST IS THE WORD AND THE 2ND IS THE NUMBER OF TIMES NEEDED TO PRINT THE FIRST WORD.
function repeat(word, num_f3) {
    for (let f_4 = 0; f_4 < num_f3; f_4++) {
        console.log(word)
    }
    
}
repeat("Okay", 10) // OKAY WILL BE REPEATED 10 TIMES(BUT ONLY 1 IS SHOWN AND THE REMAINING IS NOT)

// TO SHOW THE REMAINING MESSAGES, DO THE FFG:
function repeat(word, num_f3) {
    let f_5 = ""
    for (let f_4 = 0; f_4 < num_f3; f_4++) {
        f_5 += word;
    }
    console.log(f_5)
}
repeat("Okay ", 10)

// CREATE A FUNCTION THAT COMPARES 2 NUMBERS.....
const f_12 = parseInt(prompt("Enter any Number: "));
const f_13 = parseInt(prompt("Enter another Number: "));
function equal_to(f_12, f_13) {
    if (f_12 < f_13) {
        console.log(`${f_12} is Less than ${f_13}`)
    } else if (f_12 > f_13) {
        console.log(`${f_12} is Greather than ${f_13}`)
    } else {
        console.log(f_12 + " is Equal to " + f_13)
    }
}
equal_to(f_12,f_13)

// Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.
// If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"
function isSnakeEyes(die1, die2){
    if(die1 === 1 && die2 === 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1,1)
isSnakeEyes(3,2)


// Create a function that accepts 2 inputs and returns their sum if both inputs are numbers.”
function sum_1(f_14, f_15) {
    if (typeof f_14 !== "number" || typeof f_15 !== "number"){
        return "Both inputs must be numbers.";
    } else {
        let f_16 = f_14 + f_15;
        return f_16
    }
}
sum_1(10,5)
sum_1(10, "df")
// The sum_1 function checks if both inputs are numbers and returns their sum if they are, otherwise it returns false("Both inputs must be numbers.";).


// Write a function called lastElement which accepts a single array argument. The function should return the 
// last element of the array (without removing the element).  If the array is empty, the function should return null.
function lastElement(f_18) {
    if (f_18.length === 0) {
        return null;
    } else {
        return f_18[f_18.length -1]
    }
}
lastElement([1,2,3,4,5,6]) // 6 IS DISPLAYED
lastElement([]) // null IS DISPLAYED.


/* Define a function called capitalize that accepts a string argument and returns a 
new string with the first letter capitalized (but the rest of the string unchanged). */ 
function capitalize(f_20) {
    if (typeof f_20 !== "string") {
        return "A word is needed";
    } else {
        return f_20[0].toUpperCase() + f_20.slice(1,)
        // THE ABOVE CODE CAN BE BROKEN DOWN INTO: 
        // let f_21 = f_20[0].toUpperCase()
        // let f_22 = f_20.slice(1,)
        // return (f_21 + f_22)
    }
}
capitalize("quasim")
capitalize(12)


/* Write a function called sumArray which accepts a single argument: 
an array of numbers.  It should return the sum of all the numbers in the array. */
function sumArray(f_23) {
    let f_25 = 0;
    for (let f_24 = 0; f_24 < f_23.length; f_24++) {
        f_25 += f_23[f_24]
    }
    return f_25
}
sumArray([1,23,4,4,-10]) // 22 IS DISPLAYED.
sumArray([]) // 0 IS DISPLAYED.


/* Write a function called returnDay. this function takes in one parameter 
(a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)
If the number is less than 1 or greater than 7, the function should return null. */
function returnDay(f_27) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (f_27 < 1 || f_27 > 7){
        return null;
    } else {
        return daysOfWeek[f_27 - 1] // INDEX STARTS FROM 0 BUT WITH THE -1, WE WILL BE ABLE TO NORMALIZE THE INDEX FROM 1 TO 7 RESPECTIVELY.
    }
}
returnDay(2)


// RANDOM NUMBER GENERATOR IN JAVASCRIPT CAN BE ACCESSED USING THE Math.random()
Math.random() ; // THE random number generated is a 16 Decimal Places Number(Ranging from 0 TO 0.99999999 I.E IT NEVA REACHES 1)

var n = Math.random(); // SAVE THE RANDOM NUMBER GENERATED TO A VARIABLE
n = n * 6; // SCALING: THIS WILL HELP TO GENERATE RANDOM NUMBER FROM 0 TO WHATEVER RANGE WE NEED(DECIMAL THOUGH)
// IN THE ABOVE, WE WANT TO GENERATE RANDOM DECIMAL NUMBER FROM 0. TO 5.99(DECIMAL THOUGH). >=6 WILL NOT BE INCLUDED.
n = Math.floor(n) + 1; // GENERATE RANDOM INTEGER BETWEEN 0 TO 5(DECIMAL NOT INCLUDED)
// THE ABOVE CAN BE USED AS A DICE(DIE) GENERATOR.

// THE CODE BELOW CAN BE USED TO GENERATE INTEGER VALUE FROM 1 TO 7.
var m = Math.random() * 7;
m = Math.floor(m) + 1;

var a = Math.random() * 4;
a = Math.floor(a) + 1;
// THE ABOVE WILL HELP TO GENERATE RANDOM INTEGER NUMBER FROM 1 TO 4 MEANING THAT 4 IS THE MAXIMUM AND 1 IS THE MINIMUM.

// GENERATE RANDOM NUMBERS FROM 20 TO 25
// FIRST OF ALL, WE NEED TO FIGURE OUT HOW MANY NUMBERS WE ARE TRYING TO GENERATE(FROM THE ABOVE, WE HAVE 20 TO 25 = 6), HENCE DO THE FFG:
Math.floor(Math.random() * 6) + 20;
// Math.floor(Math.random() * how many numbers you are trying to generate) + the lowest number in the set of numbers you are trying to generate;

// SIMULATING DICE ROLLS AND CALCULATING THEIR SUM IN JAVASCRIPT:
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`)

// LOVE CALCULATOR: ACCEPT 2 LOVERS NAME AS INPUT AND PREDICT THE LOVE PERCENTAGE(BETWEEN 1 TO 100%) BETWEEN THEM(USING RANDOM NUMBER INTEGRATOR).
var tu = prompt("Enter Your name: ");
var tt = prompt("Enter your Name: ");
function ll(){
    var ww = Math.random() * 100;
    ww = Math.floor(ww) + 1;
    return ww;
}
alert("These are the results of the calculations by Dr love: " + tu + " and " + tt + " = " + ll() + "%");

// IF, ELSE IF AND ELSE STATEMENT IN JAVASCRIPT:
/* IF ELSE STATEMENT FORMAT: 
if (condition1) {
    code to be excuted
} else if (condition2) {
    code to be executed
} else{
    code to be excuted
} */

// IF ELSE STATEMENT TO DIFFERENTIATE BETWEEN UNDERAGE AND 18+
var age = 17;
if (age < 18) {
    console.log("Underage");
} else{
    console.log("18 AND ABOVE");
}

// IF, ELSE IF AND ELSE STATEMNT TO CHECK IF A NUMBER IS 0, <0 OR >0:
let number = 0;
if (number < 0) {
    console.log("Number is Less than Zero");
} else if (number === 0) {
    console.log("Number is Zero");
} else{
    console.log("Number is greather than Zero");
}
// TO TEST FOR EQUALITY IN JavaScript, USE === (EQUAL TO) AND !== (NOT EQUAL TO).

// IF, ELSE IF AND ELSE STATEMNT TO CALCULATE GRADING SYSTEM:
let score = 65;
if (score >= 80) {
    console.log("GRADE: A")
} else if (score >= 65) {
    console.log("GRADE: B")
} else if (score >= 50) {
    console.log("GRADE: C")
} else if (score >= 45) {
    console.log("GRADE: D")
} else if (score >= 40) {
    console.log("GRADE: E")
} else {
    console.log("GRADE: F")
} 

// USING IF, ELSE IF AND ELSE STATEMNT TO CHECK PASSWORD STRENGTH: 
let password = "Passw0rd@";
if (password.length < 8) {
    console.log("Password is too short.");
} else if (!/[A-Z]/.test(password)) {
    console.log("Password must contain at least One uppercase letter.");
} else if (!/[a-z]/.test(password)) {
    console.log("Password must contain at least One lowercase letter.");
} else if (!/[0-9]/.test(password)) {
    console.log("Password must contain at least One Number.");
} else if (!/[!@#\$%\^&\*]/.test(password)) {
    console.log("Password must contain at least One special character.");
} else {
    console.log("Password is strong")
}

/*
/ and / : are the delimiters thatdefines the start of the Regular Expression(Regex)
[ ] : square bracket defines a character set which matches any one of the characters inside it (A-Z ; Check if it contains character A-Z, 1-9 ; check if it contains number 1-9 E.T.C)
.test() : this method is a fucntion in javascript that checks whether the regular expression matches any part of the password string I.e .test(password)
! : Logical NOT(!) negates the result of the .test() method which will trigger the message asking the User to include One
*/

// OPERATORS AND COMPARATORS IN JAVASCRIPT:
/*
== This Operator compares two values for equality after CONVERTING both values to a common type (5 == "5" True because "5" will be converted to number and then compared to each other)
=== This Operator compares two values for equality(USED to check if BOTH THE VALUE AND THE data type ARE IDENTICAL e.g 5 === 5 (True) 5 === "5"(false) 3 === 4(false) true === false(false) "hello" === "hola"(FALSE BECAUSE hello is not hola EVEN THOUGH THEY HAVE THE SAME data type))
== IS KNOWN AS Loose Equality WHILE === IS KNOWN AS Strict Equality
!== IS NOT EQUAL TO      && AND OPERATOR    || OR OPERATOR     ! NOT OPERATOR
*/
2 === 3 // False
2 === "3" // False
2 == "2" // True because JavaScript converts the "5" to the number 5 before comparing, so it returns True.
"hello" === "hello" // True
"hello" === "hola" // False
3 === 3 // True
3 === 4 // False
true === true // True
false === true // False
null === null // True
true === 1 // False
null == undefined // True
null === undefined // False
0 == false // True
1 == 1 // True
2 === 2 && 2 !== 4 // True
"Hello" === "Hello" || 5 >= 7 // True
3 >= 2 // True
!(3 >= 2) // False

// USING IF, ELSE IF AND ELSE STATEMNT WITH OPERATORS:  === !== && || 
let time = 11;
if (time < 12) {
    console.log("Good Morning");
} else if ((time >= 12) && (time < 18)) {
    console.log("Good Afternoon");
} else {
    console.log("Good Night");
}

// MODIFIED LOVE CALCULATOR USING IF ELSE STATEMENT TO SPICE THINGS UP.
var tu = prompt("Enter Your name: ");
var tt = prompt("Enter your Name: ");
var ww = Math.random() * 100;
ww = Math.floor(ww) + 1;
if (ww >= 70) {
    alert("Love Percentage: " + ww + "%, You are Compatible");
} else if (ww >= 50 && ww < 70) {
    alert("Love Percentage: " + ww + "%, You can still try something");
} else {
    alert("Love Percentage: " + ww + "%, Impossible");
}

// WRITE A PROGRAM THAT WRITES OUT IF A GIVEN YEAR IS A LEAP YEAR...
let year = 2000;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("A LEAP YEAR")
        } else {
            console.log("NOT A LEAP YEAR")
        }
    } else {
        console.log("A LEAP YEAR")
    }
} else {
    console.log("NOT A LEAP YEAR")
}

// USING A FUNCTION TO CREATE A PROGRAM THAT WRITES OUT IF A GIVEN YEAR IS A LEAP YEAR...
function leapyear(tt) {
    if (tt % 4 === 0) {
        if (tt % 100 === 0) {
            if (tt % 400 === 0) {
                console.log("A LEAP YEAR")
            } else {
                console.log("NOT A LEAP YEAR")
            }
        } else {
            console.log("A LEAP YEAR")
        }
    } else {
        console.log("NOT A LEAP YEAR")
    }
}
leapyear(1900);

// ARRAYS IN JavaScript:
var guestlist = ["Quasim", "Favour", "Keye", "Lade", "Jopos", "Sherif", "Coder"];
guestlist.length // 7 IS DISPLAYED BECAUSE THE gueslist Array contains 7 names.
guestlist[5] // 'Sherif' WILL BE DISPLAYED.
guestlist[5].length // 6 IS DISPLAYED BECAUSE THE LENGTH OF THE WORD IN INDEX 5 (Sherif) IS 6.
guestlist.includes("Abiona") // false IS DISPLAYED BECAUSE 'Abiona' IS NOT IN guestlist..
!(guestlist.includes("Abiona")) // true WILL BE DISPLAYED BECAUSE IT IS THE REVERSE OF THE ABOVE LINE.

// ACCESSING ELEMENTS IN AN ARRAY
let e_51 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
e_51[0] // 'Monday' WILL BE DISPLAYED.
e_51[1] // 'Tuesday' WILL BE DISPLAYED
e_51[2] // 'Wednesday'
e_51[3] // 'Thursday'
e_51[4] // 'Friday'
e_51[1][3] // 's' WILL BE DISPLAYED WHICH IS THE 3RD INDEX(4TH CHRACTER) IN [1] = Tuesday
e_51[4][0] // 'F' WILL BE DISPLAYED BECAUSE IT IS THE 1ST CHARACTER IN THE 5TH ELEMENT OF THE ARRAY
e_51[6][3] // 'd' WILL BE DISPLAYED.

// ACCESSING ELEMENT AND CHANGING VALUES IN AN ARRAY.
// IN ARRAY, WE CAN AN ENTIRE ELEMENT E.G WE CAN CHANGE STRING VALUE TO INTEGER VALUE. 
let e_52 = ["Brown", "Yallow", "Rad", "Hello", "blue"]
e_52 // HERE WE CAN SEE THAT Yallow, Rad and blue IS DISPLAYED, WE WILL CHANGE TO Yellow, Red AND Blue respectively.
e_52[1] = "Yellow" // AND NOW Yellow WILL BE DISPLAYED WHENEVER WE CALL THE e_52 ARRAY
e_52[2] = "Red" // Red WILL BE DISPLAYED
e_52[4] = "Blue" // Blue WILL BE DISPLAYED.
e_52[3] = 100 // HERE, WE HAVE CHANGED 'Hello'(STRING) TO 100(INT).
e_52

let e_53 = ["Tom", "Nancy"]

// push : Add to the End
e_53.push("Oliver")
e_53.push("Harry")
e_53.push("Jerry")

// pop : Remove from the End; IT REMOVES THE LAST ITEM IN THE ARRAY
e_53.pop() // Jerry IS REMOVED FROM THE ARRAY...

// shift : Remove from start; IT REMOVES THE FIRST ELEMENT IN THE ARRAY..
e_53.shift() // Tom IS REMOVED WHICH IS THE 1ST ELEMENT.

// unshift : Add to start.
e_53.unshift("Wick") // Wick is Added to the INDEX 0(1st Position) IN THE ARRAY

// concat : Merge Arrays; JOIN ARRAYS TOGETHER.
// LET US JOIN ARRAY e_52 and e_53 TOGETHER.
let e_54 = e_52.concat(e_53)
e_54
// THE ITEMS IN e_52 WILL COME FIRST IN THE NEW ARRAY (e_52.concat(e_53) ; e_52 COMES FIRST...)

// indexOf : Returns the index of a chracater or string
e_54.indexOf("Brown") // 0 (POSITION 1) IS DISPLAYED.
e_54.indexOf("B") // -1 IS DISPLAYED BECAUSE THERE IS WORD 'B' IN THE ARRAY
// indexOf in ARRAY LOOKS FOR AN ELEMENT NOT A CHARACTER(LIKE IN STRING)

// includes : look for a value; IT RETURNS true OR false DEPENDING ON WHETHER THE VALUE IS FOUND IN THE ARRAY OR NOT.
e_54.includes("Green") // false IS DISPLAYED BECAUSE THERE IS NO Green IN ARRAY e_54
e_54.includes("Yellow") // true IS DISPLAYED.

// reverse : reverses an array
e_54.reverse() // 1ST ITEM WILL BECOME LAST, 2ND BECOMES 2ND TO LAST, 3RD ITEM BCOMES 3RD TO THE LAST E.T.C.

/*
ctrl + f AND SEARCH FOR SPLICE AND SLICE TO READ MORE ABOUT IT.
// slice : copies a portion on an array
// splice : removes/replaces elements
*/

// join : creates a string from an array  
// sort : sorts an array

// IN ARRAYS, == AND === ONLY HELPS TO CHECK FOR THE REFERENCE IN MEMORY. HENCE, THEY CANNOT BE USED TO COMPARE ARRAYS...

// MULTI-DIMENSIONAL ARRAYS:
let e_55 = [["X", "O", "X"], ["O", null, "X"], ["O", "O", "X"]]
e_55 // A 3 BY 3 ARRAY IS CREATED.

// TO ACCESS THE null ELEMENT INSIDE OF e_55
e_55[1][1] // THE null Item WILL BE DISPLAYED

// NESTED LOOPS IN ARRAY:
let e_63 = ["Lions", "Tigers", "Bears", "Elephant", "Chicken", "Leopard"]
for (let e_64 = 0; e_64 < e_63.length; e_64++) {
    console.log(e_64, e_63[e_64])
}

let e_65 = [
    ["Hello", "World", "Bee"],
    ["Tom", "Jerry", "Dayo"],
    ["Tola", "Bola", "Sola"]
]
for (let e_66 = 0; e_66 < e_65.length; e_66++){
    const e_68 = e_65[e_66]
    console.log(`ROW ${e_66 + 1}: `)
    for (let e_67 = 0; e_67 < e_68.length; e_67++){
        console.log(e_68[e_67])
    }
}

// WRITE A CODE THAT CREATES A PROMPT AND ASK FOR USER NAME AND CHECK IF THE NAME IS INSIDE guestlist.....
var nnmm = prompt("Enter your Name: ");
if (guestlist.includes(nnmm)) {
    console.log("Welcome")
} else {
    console.log("Sorry, Name not found!")
}
// WE OBSERVE THAT EVEN IF WE TYPE IN 'quasim', Name not found is DISPLAYED EVEN THOUGH THE NAME is in gueslist(This is due to the fact that q is in lowercase WHILE THE q in guestlist is IN UPPERCASE)
// HENCE WE WILL MODIFY OUR CODE TO CONVERT THE FIRST LETTER OF THE USER INPUT INTO UPPERCASE WHILE THE REST WILL BE IN LOWERCASE IRRESPECTIVE OF THE USER INPUT:
var nnmm = prompt("Enter your Name: ");
var nnmmCase = ("" + nnmm.slice(0,1).toUpperCase() + nnmm.slice(1).toLowerCase()); /* THIS WILL CONCAT THE uppercased(first letter) AND the lowercased(remaining letters) TOGETHER.*/
if (guestlist.includes(nnmmCase)) {
    console.log("Welcome")
} else {
    console.log("Sorry, Name not found!")
}
// THE ABOVE CODE CAN BE SIMPLIFIED/BROKEN DOWN(ALSO BE WRITTEN AS) INTO: 
var nnmm = prompt("Enter your Name: ");
var nnmmCase = nnmm.slice(0,1).toUpperCase();
var nnmmLower = nnmm.slice(1).toLowerCase();
var full = ("" + nnmmCase + nnmmLower); /* THIS WILL CONCAT THE uppercased(first letter) AND the lowercased(remaining letters) TOGETHER.*/
if (guestlist.includes(full)) {
    console.log("Welcome")
} else {
    console.log("Sorry, Name not found!")
} 

// USE IF ELSE STATEMENT TO WRITE A CODE THAT CHECKS IF A PASSWORD HAS 6+ CHARACTERS.
let e_45 = prompt("Enter your password: ")
if (e_45.length >= 6) {
    console.log("LONG ENOUGH PASSWORD")
} else {
   console.log("PASSWORD IS TOO SHORT! Must be 6+ CHARACTERS.")
} 

// USE IF ELSE STATEMENT TO WRITE A CODE THAT CHECKS IF A PASSWORD DOES NOT INCLUDE SPACE
if (e_45.indexOf(" ") === -1) {
   console.log("GOOD JOB! NO SPACE")
} else {
   console.log("Password cannot contain spaces!")
}

// NOW TO COMBINE THE 2 ABOVE USING NESTED STATEMENT, DO THE FFG:
let e_46 = prompt("Enter your password: ")
if (e_46.length >= 6) {
    if (e_46.indexOf(" ") === -1) {
        console.log("Valid Password...")
    } else {
        console.log("Password cannot contain spaces")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

// HOW TO COMBINE BOTH USING THE AND(&&) OPERATOR...
let e_47 = prompt("Enter Your Password: ")
if (e_47.length >= 6 && e_47.indexOf(" ") === -1) {
   console.log("VALID PASSWORD!...")
} else {
   console.log("INVALID PASSWORD.....!")
}

/* indexOf(): 
THE indexOf() method in JAvascript IS USED TO FIND THE FIRST OCCURENCE OF A SPECIFIED VALUE WITHIN A STRING OR ANY ARRAY.
IT RETURNS THE INDEX OF THE FIRST OCCURENECE OF THE VALUE, IF THE VALUE IS NOT FOUND IT RETURNS -1 */
("hello").indexOf("h") // 0 WILL BE DIPLAYED
let e_40 = "Adeyanju"
e_40.indexOf("y") // 3 WILL BE DISPLAYED
e_40.indexOf("u") // 7 WILL BE DISPLAYED.
e_40.indexOf("z") // -1 IS DISPLAYED AND THIS IS DUE TO THE FACT "z" IS NOT PRESENT IN THE WORD.
e_40.indexOf(" ") // -1 IS RETURNED AND THIS IS DUE TO THE FACT THAT " " IS NOT PRESENT IN THE WORD.

let e_44 = "Hello ooo I am ADISA"
e_44.indexOf("am") // 12 WILL BE DISPLAYED BECAUSE THE FIRST LETTER "a" IS ON THE 12TH INDEX....

var output = []; // EMPTY ARRAY
output; // [] WILL BE DISPLAYED.

// USE THE .push("Element") TO ADD NEW ELEMENT TO AN ARRAY. NOTE: THE element added WILL BE ADDED TO THE END OF THE ARRAY
output.push(1,"Hello",100);
output; // [1,"Hello",100] WILL BE DISPLAYED.
output[1]; // 'Hello' WILL BE DISPLAYED.
output.push(23,54,88,96,"Mango","Rabbit"); // ALL THE ITEMS IN THE () WILL BE ADDED TO THE LIST.

// USE THE .pop() TO REMOVE ITEMS FROM AN ARRAY... NOTE: IT WILL REMOVE THE LAST ITEM IN THE ARRAY...
output.pop() // 'Rabbit' IS DISPLAYED AND THIS IS DUE TO THE FACT THAT Rabbit IS REMOVED FROM THE Array.
output.pop() // 'Mango' IS REMOVED FROM THE Array....

// .splice() METHOD: 
/* .splice() Method : is used to change the contents of an Array by removing, replacing or Adding Elements.
   .splice(start, deletecount, item1, item2) MEANING THAT: 
    start : The index at which to start changing the Array
   deletecount : The number of elements to remove from the array. If deletecount is 0, then no elements are removed.
   item1, item2, item... : are the elements to add to the array, starting at the start index. if no elements are specified, splice() only removes elements from the array.
*/
output
output.splice(3,2); /* [23, 54] WILL BE DISPLAYED MEANING THAT THEY HAVE BEEN REMOVED.
THE ABOVE CODE CANBE INTERPRETED AS START FROM INDEX 3 AND THEN REMOVE 2 ELEMENT(I.E REMOVE INDEX 3 AND 4 FROM THE output ARRAY) */
output.splice(2,2,"Quasim", "Keye") /* [100, 88] IS DISPLAYED MEANING THEY HAVE BEEN REMOVED
AND WHEN WE RUN output, WE WILL SEE THAT 'Quasim' AND 'keye' HAS BEEN ADDED TO THE ARRAY. */
output.splice(2,0,"Favour") /* HERE NO ELEMENTS ARE REMOVED BECAUSE IT SIMPLY SAYS START FROM INDEX 2 AND REMOVE 0 ELEMENTS 
BUT IT IS OBSERVED THAT 'Favour' IS ADDED TO THE Array. */

// replace and repeat methods ARE USED TO MANIPULATE STRINGS IN JAVASCRIPT: 
// .repeat()
"hello ".repeat(2) // hello hello IS DISPLAYED.
const e_100 = "Hello World!"
e_100.repeat(100) // Hello World! IS REPEATED 100 TIMES.

// .replace()
e_100.replace("World!", "Javascript?") // Hello Javascript? IS DISPLAYED.

"I am a Boy ".replace("Boy", "Girl").toUpperCase().repeat(2) // 'I AM A GIRL I AM A GIRL ' IS DISPLAYED.

/* WRITE A PROGRAM THAT PRINTS THE NUMBERS FROM 1 TO .... AS LONG AS IT IS BEING RUN IN THE CONSOLE,
IT WILL CONTINUE TO GENERATE THE NEXT NUMBER AGAIN AND AGAIN BUT WE WILL MODIFY THIS CODE USING WHILE STATEMENT LATER IN THE COURSE */
var num_1 = [];
var count = 1;
function NUM_PRINT() {
    num_1.push(count)
    count = count + 1;
    console.log(num_1);
}

/* WRITE A PROGRAM THAT PRINTS THE NUMBERS FROM 1 TO 100. BUT FOR MULTIPLES OF 3, print ("Fizz") INSTEAD OF THE NUMBER AND FOR 
THE MULTIPLES OF FIVE PRINT "Buzz". For NUMBERS WHICH ARE MULTIPLES OF BOTH 3 AND 5, Print "FizzBuzz" */
var num100 = [];
var count11 = 1;
function FizzBuzz1() {
    if (count11 % 3 === 0 && count11 % 5 === 0) {
        num100.push("FizzBuzz");
    } else if (count11 % 3 === 0) {
        num100.push("Fizz");
    } else if (count11 % 5 === 0) {
        num100.push("Buzz");
    } else {
        num100.push(count11);
    }
    console.log(num100)
    count11 = count11 + 1;
}
FizzBuzz1()
/* WE WILL MODIFY THIS CODE USING WHILE LOOP SO IT CAN GENERATE THE FIRST 100 AT ONCE
WITHOUT HAVING TO RUN THE CODE IN THE INTERPRETER AGAIN AND AGAIN. */


// HOW TO CHOOSE A RANDOM ELEMENT FROM AN ARRAY: 
var surname = ["ADE", "BAYO", "TOLA", "KOREDE", "WALE", "SAYO", "BEN"];
let randomIndex = Math.floor(Math.random() * surname.length)
let randomName = surname[randomIndex];
randomName
/* 
   Math.random() GENERATES A Random decimal Number WHICH IS THEN MULTIPLIED BY THE ARRAY LENGTH(name.length) AND THEN 
   ROUNDED DOWN TO THE NEAREST WHOLE NUMBER(TO GIVE A NUMBER BETWEEN 0 AND THE LAST INDEX OF THE ARRAY) WHICH GIVES A
   VALID Array Index. THIS METHOD ENSURES THAT YOU GET A Random Item from the array Each Time you Run the CODE..
*/

/* WRITE A FUNCTION WHICH WILL SELECT A RANDOM NAME FROM A LIST OF NAMES AND THE PERSON SELECTED WILL HAVE TO PAY FOR EVERYBODY'S FOOD BILL. */
var nam_es = ["ADE", "BAYO", "TOLA", "KOREDE", "WALE", "SAYO", "BEN"];
function whospaying(nam_es) {
    let nam_es_rand = Math.floor(Math.random() * nam_es.length)
    let nam_es_index = nam_es[nam_es_rand]
    console.log(nam_es_index + " is going to buy Lunch Today.")
}
whospaying(nam_es)

// WE CAN ALWAYS REUSE THE FUNCTION ABOVE BY CALLING THE FUNCTION NAME AND MAKING SURE WE INCLUDE THE name of the Array In the Bracket
var ooo = ["Saheed", "Azeez", "Salam", "Quasim"]
whospaying(ooo);


// WHILE LOOP IN JAVASCRIPT: 
/* 
while (condition) {
    // DO SOMETHING
}
*/

let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}
// 0 TO 4 WILL BE DISPLAYED....

var j = 1;
while(j < 101) {
    console.log(j);
    j = j + 1;
}
// 1 TO 100 WILL BE DISPLAYED...

let countdown = 10;
while(countdown > 0) {
    console.log(countdown);
    countdown-- ; // ALSO countdown = countdown - 1
}
console.log("Happy Birthday");
// WHILE LOOP CAN ALSO BE USED FOR COUNTING DOWN

let n = 5;
let sum_ = 0;
let k = 1;
while (k <= n){
    sum_ = sum_ + k;
    k++;
}
console.log("Sum of First 5 Natural Number is " + sum_);
// SUM OF n NATURAL NUMBERS (THE ABOVE WILL CALCULATE 5+4+3+2+1)


// PASSWORD: USER INPUT(WITH PROMPT)
let userinput;
let password_ = "123456";
while (userinput !== password_) {
    userinput = prompt("Enter password: ")
}
console.log("Access Granted.")
// THIS LOOP REPEATEDLY PROMPTS THE USER TO ENTER A PASSWORD UNTIL THE CORRECT PASSWORD(123456) IS ENTERED.


// FINDING THE FIRST EVEN NUMBER: 
let fir_num = [1,3,5,7,9,10,11,12];
let index = 0;
let firstEven;
function FirstEven(fir_num) {
   while (index < fir_num.length) {
      if (fir_num[index] % 2 === 0) {
         firstEven = fir_num[index];
         break;
      }
      index++
   }
   console.log("First Even Number is: " + firstEven);
}
FirstEven(fir_num)
// THIS LOOP ITERATES THROUGH AN ARRAY TO FIND THE FIRST EVEN NUMBER AND STOPS THE LOOP USING break ONCE IT FINDS ONE
var fi_n = [1,3,5,7,9,11,13,15,17,19,20]
FirstEven(fi_n) // THE FIRST EVEN Number in the fi_n ARRAY WILL BE DISPLAYEED.


// GENERATING A RANDOM NUMBER UNTIL A CONDITION IS MET: 
let rand_num;
while (rand_num !== 6) {
    rand_num = Math.floor(Math.random() * 10) + 1;
    console.log("Generated Number: " + rand_num);
}
console.log("Stopped Because 6 was Generated")
// THIS LOOP GENERATES RANDOM NUMBERS BETWEEN 1 AND 10 UNTIL THE NUMBER 6 IS GENERATED, AT WHICH POINT IT STOPS.

// USING WHILE LOOP TO MODIFY THE FizzBuzz CHALLENGE:
// MODIFIED FizzBuzz CHALLENGE WHICH DISPLAYS THE FIRST 100 FIZZBUZZ INTEGERS AT ONCE
var num100 = [];
var count11 = 1;
function FizzBuzz1() {
    while (count11 <= 100) {
        if (count11 % 3 === 0 && count11 % 5 === 0) {
            num100.push("FizzBuzz");
        } else if (count11 % 3 === 0) {
            num100.push("Fizz");
        } else if (count11 % 5 === 0) {
            num100.push("Buzz");
        } else {
            num100.push(count11);
        }
        console.log(num100)
        count11 = count11 + 1;
    }
}
FizzBuzz1()

// FIZZBUZZ CHALLENGE: TO PRINT BUT NOT IN THE SAME ARRAY
var num100 = [];
var count11 = 1;
function FizzBuzz1() {
    while (count11 <= 100) {
        if (count11 % 3 === 0 && count11 % 5 === 0) {
            console.log("FizzBuzz");
        } else if (count11 % 3 === 0) {
            console.log("Fizz");
        } else if (count11 % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(count11);
        }
        count11 = count11 + 1;
    }
}
FizzBuzz1()


// USE WHILE LOOP TO SIMULATE THE LYRICS BELOW:  FROM 99 BOTTLES TO 0 ..........
/* 99 BOTTLES OF BEER  ON THE WALL, 99 BOTTLES OF BEER.
   TAKE ONE DOWN AND PASS IT AROUND, 98 BOTTLES OF BEAR ON THE WALL. */
   let ind = 99;
   while (ind > 0) {
       console.log(ind + " Bottles Of Beer On the Wall, " + ind + " Bottles of Beer\nTake One down and pass it around, " + (ind - 1) + " Bottles of BEAR On the Wall")
       ind--;
   }
   
// USING FUNCTION + WHILE LOOP TO SIMULATE THE LYRICS(99 BOTTLES).
   function _99_bottles() {
       let ind = 99;
       while (ind > 0) {
           console.log(ind + " Bottles Of Beer On the Wall, " + ind + " Bottles of Beer\nTake One down and pass it around, " + (ind - 1) + " Bottles of BEAR On the Wall")
           ind--;
       }
   }
   _99_bottles();
   

// MODIFIED VERSION OF THE ABOVE:
// USE WHILE LOOP TO WRITE LYRICS OF 98 BOTTLES :
function dey_p() {
    let dey_ = 99;
    let d_e = dey_ - 1;
    while (dey_ > 0) {
        if (dey_ === 1) {
            console.log(dey_ + " Bottle Of Beer On the Wall, " + dey_ + " Bottle of Beer \nTake One down and pass it around, " + "No more" + " Bottles of BEAR On the Wall")
        } else if (d_e === 1) {
            console.log(dey_ + " Bottles Of Beer On the Wall, " + dey_ + " Bottles of Beer \nTake One down and pass it around, " + d_e + " Bottle of BEAR On the Wall")
        } else {
            console.log(dey_ + " Bottles Of Beer On the Wall, " + dey_ + " Bottles of Beer \nTake One down and pass it around, " + d_e + " Bottles of BEAR On the Wall")
        }
        dey_--;
        d_e--;
    }
}
dey_p();

// FOR LOOP IN JAVASCRIPT : 
/*
for (let index = 0; index < bound; index++) {
   
}
OR OR OR OR OR
for (let index = 0(START); index < bound(END); index++(CHANGE)) {
   DO SOMETHING
}
*/
// PRINT 1 TO 20 IN JAVASCRIPT..........
for (let i = 0; i < 21; i++) {
    console.log(i)
 }
 
 // PRINT ALL THE EVEN NUMBERS BETWEEN 0 AND 101
 for (let e_20 = 0; e_20 < 101; e_20 = e_20 + 2) {
    console.log(e_20)
 }
 
 // PRINT ALL THE ODD NUMBERS BETWEEN 0 AND 100 AND ASSIGN THEM INTO A SINGLE ARRAY.
 let e_21 = [];
 for (let e_22 = 1; e_22 < 100; e_22 = e_22 + 2) {
    e_21.push(e_22)
    console.log(e_21);
 }
 
 // FIZZBUZZ CHALLENGE USING FOR LOOP: 
 let e_24 = [];
 function e_25() {
     for (let e_26 = 1; e_26 < 101; e_26++) {
         if (e_26 % 3 === 0 && e_26 % 5 === 0) {
             e_24.push("FizzBuzz");
         } else if (e_26 % 3 === 0) {
             e_24.push("Fizz");
         } else if (e_26 % 5 === 0) {
             e_24.push("Buzz");
         } else {
             e_24.push(e_26);
         }
     }
     console.log(e_24);
 }
 e_25()

// WHILE LOOP:
let e_69 = 0
while (e_69 < 101) {
    console.log(e_69)
    e_69++
}

for (let e_70 = 101; e_70 <= 200; e_70++){
    console.log(e_70)
}

// PASSWORD CHECK: AS LONG AS THE USER KEEP ENTERING THE WRONG PASSWORD, IT WLL ALLOW THEM TO ENTER THE THE PASSWORD UNTIL THEY GET IT RIGHT.
let e_71 = "Password@"
let e_72 = prompt("ENTER Password: ")
while (e_72 !== e_71) {
    console.log("WRONG Password, Please Try Again.....")
    e_72 = prompt("ENTER Password: ")
}
console.log("CORRECT PASSWORD")
// WHEN TO USE WHILE AND FOR LOOP.
/* 
 while loop: SHOULD BE USED WHEN YOU WANT TO REPEAT A BLOCK OF CODE AS LONG AS A CERTAIN CONDITION IS TRUE
(USEFUL WHEN THE NUMBER OF ITERATIONS ISN'T KNOWN IN ADVANCE AND THE LOOP CONTINUES UNTIL THE CONDITION BECOMES FALSE)

 for loop: SHOULD BE USED WHEN YOU WANT TO ITERATE OVER A SEQUENCE(A LIST, TUPLE OR RANGE) A SPECIFIED NUMBER OF TIMES.
 IT IS USEFUL WHEN YOU KNOW IN ADVANCE HOW MANY TIMES YOU NEED TO REPEAT THE BLOCK OF CODE.
 */

/* BREAK KEYWORD: IT IS COMMONLY USED WITH WHILE LOOP. AS SOON AS THE CODE ENCONTERS A BREAK KEYWORD,
IT STOP THE EXECUTION OF THE LOOP IMMEDIATELY AND THE CODE JUST RESUMES RUNNING AFTER OUR LOOP...... */

for (let e_74 = 1; e_74 < 11; e_74++){
    if (e_74 === 7) {
        break;
    }
    console.log(e_74)
}
// FROM THE ABOVE, WHEN TTHE CODE GETS TO 6, IT STOPS BECAUSE THE BREAK KEYWORD IS SET TO 7.(HENCE 7 TO 10 WILL NOT BE DISPLAYED.)

/* AS LONG AS THE USER KEEP TYPING SOMETHING DIFFERENT FROM stop copying me!, THE CODE WILL CONTINUE TO RUN(ALLOW USER TO TYPE SOMETHING NEW)
AND WHEN THEY EVENTUALLY TYPE stp copying me!, THE CODE WILL STOP. */
let e_73 = prompt("Hey, Say Something!")
while(true){
    e_73 = prompt(e_73);
    if (e_73.toLowerCase() === "stop copying me!") {
        break;
    }
}
console.log("OK YOU WIN")

// MULTIPLICATION TABLE 10 WILL BE DISPLAYED
let e_76 = 10;
for (let e_75 = 1; e_75 <= 12; e_75++) {
    console.log(`${e_76} * ${e_75} = ${e_76 * e_75}`)
}

// MUTIPLICATION TABLE 1 TO 12 WILL BE DISPLAYED
for (let e_78 = 1; e_78 <= 12; e_78++) {
    for (let e_77 = 1; e_77 <= 12; e_77++)
        console.log(`${e_78} * ${e_77} = ${e_78 * e_77}`)
}


// WRITING A GUESSING GAME: 
/* 
    FIRST OF ALL, ASK A USER TO ENTER A MAXIMUM NUMBER
    THEN WE WILL MAKE SURE WE GET A VALID MAXIMUM NUMBER SO AS TO AVOID NaN VALUES
    THEN GENERATE A RANDOM NUMBER FROM 1 TO THE MAXIMUM NUMBER SELECTED BY THE USER
    THEN ALLOW THE USER TO ENTER A GUESS AND USE IF AND ELSE STATEMENT TO PROCEED
    NOW WE WILL KEEP TRACK OF THE NUMBER OF ATTEMPTS IT TOOK THE USER TO GUESS CORRECTLY
    NOW WE WILL ADD THE ABILITY TO QUIT/END THE GAME

*/
let maximum = parseInt(prompt("Enter your Maximum Number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter A Valid Number: "))
} // WHILE LOOP IS USED TO ALLOW THE USER TO RE INPUT VALUE IF THEY TYPE IN A NaN VALUE(THE LOOP WILL CONTINUE TO RUN UNTIL THE USER TYPE IN A VALID INTEGER)
const e_79 = Math.floor(Math.random() * maximum) + 1;
console.log(e_79)

let guess = parseInt(prompt("Enter your First Guess: "));
let attempts = 1;

while (parseInt(guess) !== e_79) { // THIS LINE OF CODE WILL CONTINUE TO RUN AS LONG AS guess !== e_79
    if (guess === "q") break; // IF THE USER INPUT q, IT WILL BREAK OUT OF THIS CURRENT LOOP AND MOVE UNTO THE NEXT LOOP
    attempts++;
    guess = parseInt(guess);
    if(guess > e_79) {
        guess = prompt("Too HIGH! Enter a new Guess: ");
    } else{
        guess = prompt("TOO Low! Enter a new Guess: ");
    }       
} // THE CODE BELOW IS THE NEXT LOOP THE CODE WILL DIVE INTO IF THE USER TYPES IN q
if (guess === "q") {
    console.log("OK QUITTING!")
} else {
    console.log("CONGRATS, YOU WIN...")
    console.log("GUESS is Equal to Number generated, YOU GOT IT! It took you " + attempts + " guesses") // FINALLY, WHEN guess === e_79; THIS LINE WILL RUN...
}


// MODIFIED AND BETTER VERSION OF THE GUESSING GAME: 
let f_00 = parseInt(prompt("Enter maximum Number: "));
while (!f_00) {
    f_00 = parseInt(prompt("Enter a valid Number: "));
}

const f_01 = Math.floor(Math.random() * f_00) + 1;
console.log(f_01);

let f_02 = prompt("Enter your First Guess (Type 'q' to quit): ");
let f_03 = 1;

while (parseInt(f_02) !== f_01) {
    if (f_02 === "q") break;
    f_02 = parseInt(f_02)
    if (f_02 > f_01) {
        f_02 = prompt("GUESS TOO HIGH! Enter a new guess: ");
        f_03++ // THE INCREMENT IS ADDED HERE SO AS TO INCREMENT ONLY WHEN THE USER GUESS WRONG NOT WHEN THEY ENTER A string
    } else if (f_02 < f_01) {
        f_02 = prompt("GUESS TOO LOW! Enter a new guess: ");
        f_03++ // THE INCREMENT IS ADDED HERE SO AS TO INCREMENT ONLY WHEN THE USER GUESS WRONG NOT WHEN THEY ENTER A string
    } else {
        f_02 = prompt("Invalid guess. Please enter a Number or 'q' to quit")
    }
}
if (f_02 === "q") {
    console.log("OK QUITTING!")
} else {
    console.log("CONGRATS, YOU WIN!!!!");
    console.log("YOU GOT IT, It took you " + f_03 + " Tries")
}
// FROM THE MODIFIED VERSION ABOVE, WE CAN SEE THAT AFTER INPUTIG OUR MAX NUMBER AND WE PRESS 'q', THE GAME WILL END
// ALSO AFTER INPUTING OUT MAXIMUM NUMBER AND THEN WE ENTER string INSTEAD OF Int, IT WILL THROW A MESSAGE AND ALSO ALLOWS THE USER TO TRY AGAIN...


// SWITCH STATEMENT: 
// A SWITCH STATEMENT(CONTROL FLOW STATEMENT) IS USED TO PERFORM DIFFERENT ACTIONS BASED ON DIFFERENT CONDITIONS. IT CAN BE CONSIDERED AS AN ALTERNATIVE TO MULTIPLE if...else STATEMENTS.
const e_48 = 9;
switch (e_48) {
   case 1:
      console.log("SUNDAY");
      break;
   case 2:
      console.log("MONDAY");
      break;
   case 3:
      console.log("TUESDAY");
      break;
   case 4:
      console.log("WEDNESDAY");
      break;
   case 5:
      console.log("THURSDAY");
      break;
   case 6:
      console.log("FRIDAY");
      break;
   case 7:
      console.log("SATURDAY");
      break;
   default:
      console.log("INVALID DAY!!!!");
      break;
}

// OBJECT(DICTIONARIES) IN JAVASCRIPT: 
let e_56 = {
    Name : "Quasim",
    Age : 19,
    Gender : "Male",
    Height : "1.88m",
    comment : "Good"
}
// NOTE: IN JAVASCRIPT, THE keys ARE CONVERTED TO STRING TYPE AND HENCE TO ACCESS THEM, USE ["key name"]
e_56

// ACCESSING OBJECTS IN JAVASCRIPT: 
// e_56[Age] // AN ERROR WILL BE DISPLAYED SAYING undefined AND THIS IS BECAUSE OF THE ABSENCE OF ""
e_56["Age"] // 19 IS DISPLAYED WHICH IS THE Value ASSIGNED TO THE "Age" Key..
e_56["Name"] // 'Quasim' will be displayed.
e_56["NAME"] // Undefined IS DISPLAYED BECAUSE THE KEY IS STORED AS "Name" NOT "NAME"
// IN SUMMARY, IF THE key NAME IS NOT INSERTED THE WAY IT WAS WHEN CREATING THE OBJECT, THEN Undefined WILL BE DISPLAYED

// OR BETTER STILL, USE THE (.)DOT NOTATION TO ACCESS ITEMS FROM YOUR OBJECT.
// WHEN USING THE .(DOT) NOTATION, DO NOT USE "" FOR THE key
e_56.Gender
e_56.Height

/* IT IS ADVISABLE TO USE THE [""] WHEN ACCESSING BECAUSE IT ALLOWS YOU TO BE PRECISE, ACCURATE AND DO MORE */

let e_57 = {
    Name : ["Oba", "Abiona", "Ife", "Segun"],
    Surname : ["Takeet", "Emma", "Soks", "Fuad"],
    Age : [19,17,19,18]
}
e_57["Name"] // ['Oba', 'Abiona', 'Ife', 'Segun'] WILL BE DISPLAYED
e_57["Surname"][0] // 'Takeet' IS DISPLAYED
// USING .(DOT) NOTATION
e_57.Surname[2] // 'Soks' IS DISPLAYED
e_57.Name[3] // 'Segun' IS DISPLAYED.

// ALSO, WE CAN USE THE Object.(keys, values entries)(array_name) TO ACCESS ITEMS IN OUR OBJECT

// MODIFYING OBJECTS: 
let e_61 = {
   Jopos : 64,
   Keye : 57,
   Ayo : 74
}
// LET TRY AND CHANGE THE VALUES OF KEYS IN ARRAY e_61
e_61["Jopos"] = 70
e_61.Ayo = 79
e_61["Keye"] = "C"
e_61["Lade"] = 47
e_61["Fagbo"] = 49

e_61
// FROM THE AB0VE, WE CAN SEE THAT WE HAVE CHANGED ALL THE VALUES AND ALSO ADDED MORE NAMES AND DIER GRADE....


var bellboy = [
    bellboy1 = {
        name : "Timmy",
        age : 19,
        hasWorkPermit : true,
        languages : ["Hausa", "English", "Yoruba"]
    },

    bellboy2 = {
        name : "John",
        age : 21,
        hasWorkPermit : false,
        languages : ["Yoruba"]
    },

    bellboy3 = {
        name : "Timothy",
        age : 25,
        hasWorkPermit : true,
        languages : ["Hausa"]
    } 
]
bellboy
bellboy2
bellboy3['age']
bellboy1['languages'][0]
bellboy1['languages'][1] = "Qatar"
bellboy1['languages'][1] = "English"
bellboy2['hasWorkPermit']


var bellboy4 = {
    Name : ["Salam", "Azeez", "Saheed"],
    age : [12,14,17],
    hasWorkPermit : [true, false, true],
    languages : [["Hausa","Yoruba","French"],["Yoruba","French"],["Chinese"]]
}
bellboy4["Name"][2]
bellboy4.Name[2]
bellboy4["languages"]
bellboy4["languages"][1]
bellboy4["languages"][1][0]


// COMBINING STRING, RANDOM AND OBJECTS TO GET A DESIRED RESULT.....
const e_58 = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let e_59 = e_58["address"] + ", " + e_58["state"] + ", " + e_58["city"] + ", " + e_58["zipcode"]
e_59
let e_60 = `${e_58.address}, ${e_58.city}, ${e_58.state}, ${e_58.zipcode}`
e_60
console.log(e_59 + "\n" + e_60)

// FOR OF LOOP: IT IS A NICE AND EASY WAY OF ITERATING OVER ARRAYS.
/* FOR OF LOOP SYNTAX
for (variable of iterable) {
    statement
}
*/

// USING THE FOR LOOP TO ITERATE THROUGH ITEMS IN THE e_80 array
let e_80 = ["Keye", "Jopos", "Lade", "Sherif", "Coder", "Ayo", "Fagbo"]
for (let e_81 = 0; e_81 < e_80.length; e_81++){
    console.log(e_80[e_81])
} 

// USING THE FOR OF LOOP TO ITERATE ITEMS IN THE e_80 ARRAY
for (let e_85 of e_80) {
    console.log(e_85)
}

let e_82 = [
    ["Oba", "Ife", "Abious", "Greg"],
    ["Dotun", "Adeola", "Segun", "Lemo"],
    ["Fuad", "Fikky", "Racheal", "Fisayo"]
]

// USING FOR LOOP TO ITERATE THROUGH ITEMS IN THE e_82 ARRAY
for (let e_83 = 0; e_83 < e_82.length; e_83++){
    const e_88 = e_82[e_83]
    for (let e_84 = 0; e_84 < e_88.length; e_84++){
        console.log(e_88[e_84])
    }
}

// USING THE FOR OF LOOP TO ITERATE THROUGH ITEMS IN THE e_82 ARRAY 
for (let e_86 of e_82) {
    for (let e_87 of e_86){
        console.log(e_87) 
    }
}

// THE FOR OF LOOP CAN ALSO BE USED TO ITERATE THROUGH CHARACTERS OF A WORD.
for (let char of "Hello World!"){
    console.log(char)
}

// THE FOR OF LOOP CANNOT BE USED FOR OBJECT(DICTIONARY) LIKE ARRAYS IN JAVASCRIPT
// TO ITERATE THROUGH AN OBJECT(DICTIONARY) IN JAVASCRIPT, USE THE FOR IN LOOP.
const e_89 = {
    Keye: 67,
    Favour: 54,
    Jopos: 80,
    Lade: 50,
    "Sherif": 59,
    "Ayo": 65,
    "Coder": 61
}
e_89
// TO ITERATE THROUGH THE NAMES ONLY, DO THE FFG:
for (let e_90 in e_89) {
    console.log(e_90)
} // WITH THIS, ONLY THE NAMES WILL BE DISPLAYED.

// TO ITERATE THROUGH THE NAMES AND SCORES IN OBJECT e_89, DO THE FFG:
for (let e_90 in e_89) {
    console.log(e_90 + ": " + e_89[e_90])
}

// ALSO, WE CAN USE THE Object.(keys, values entries) TO ACCESS ITEMS IN OUR OBJECT
Object.keys(e_89) // THE KEYS IN e_89 I.E NAMES WILL BE DISPLAYED.
Object.values(e_89) // THE VALUES IN e_89 I.E SCORES WILL BE DISPLAYED.
Object.entries(e_89) // A NESTED ARRAY OF KEY VALUE PAIRS OF e_89 WILL BE DISPLAYED.

// LET US TRY TO CALCULATE THE AVERAGE SCORE IN THE e_89 OBJECT
let e_91 = 0;
let e_92 = Object.values(e_89);
for (let e_93 of e_92) {
    e_91 = e_91 + e_93
}
console.log(e_91 / e_92.length) // 62.2857.... WILL BE DISPLAYED


// THE LOCATION WHERE A VARIABLE IS DEFINED DESCRIBES WHERE WE HAVE ACCESS TO THAT VARIABLE.

// THERE ARE PRIMARILY 3 TYPES OF SCOPE IN PROGRAMMING: 
/* 
1. GLOBAL SCOPE
2. LOCAL/FUNCTION SCOPE
3. BLOCK SCOPE
4. LEXICAL SCOPE
*/

function bankRobbery() {
    const heroes = ["Black Panther", "Spiderman", "Wolverine", "Hulk"]
    function cryForHelp(){
        function inner() {
            for (hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner()
    }
    cryForHelp()
}
bankRobbery()

// Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square.
function square(f_18){
    console.log(f_18**2)
}
square(10)

// ANOTHER WAY OF DECLARING FUNCTION:
const add = function(x,y) {
    return x+y
}
add(2,3)
// THE ABOVE IS ALSO THE SAME AS:
function add1(x,y) {
    return x+y
}
add1(5,10)

// WE CAN ALSO CREATE OUR OWN Math Object JUST LIKE THE .Math() FUNCTION IN JAVASCRIPT
const myMath = {
    PI : 3.142,
    square: function (num) {return num ** 2},
    cube: function (num) {return num ** 3},
    sqreroot: function(num) {return num/1.414}
} // another way of writing this is to remove the : and function; our code will still RUN AND PERFORM THE SAME OPERATION AS BEFORE.
// WE CAN EASILY ACCESS THE FUNCTION JUST BY CALLING THE NAME AND THE PROPERTY NEEDED
myMath.PI // 3.142 IS DISPLAYED
myMath.square(6) // 36 IS DISPLAYED
myMath["cube"](5) // Cube of 5 = 125 IS DISPLAYED
myMath["sqreroot"](4) // sqreroot OF 4

// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter.
const perArea = {
    area1(num1) {return num1 * num1},
    perimeter1(num1) {return num1 * 4}
}
perArea.area1(10)
perArea.perimeter1(4)

// THE MYSTERIOUS KEYWORD this :
const cat = {
    name: "Tinubu Ahmed",
    color: "Black",
    breed: "Wild-Animal",
    meow() {
        console.log("MEOW")
        console.log(`${cat.name} says MEOW`)
        console.log(`${this.name} says MEOW`)
    }
}
cat.meow() // MEOW WILL BE DISPLAYED...

// EXERCISE:
// Define an object called hen.  It should have three properties: name should be set to 'Helen', eggCount should be set to 0 and
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}
hen.name
hen.eggCount
hen.layAnEgg()
hen.layAnEgg()
hen.eggCount

// forEach METHOD: IT ACCEPTS A CALLBACK FUNCTION. CALLS THE FUNCTION ONCE PER ELEMENT IN THE ARRAY. BASICALLY, IT ALLOWS US TO RUN A FUNCTION OR SOME CODE ONCE PER ITEM IN SOME ARRAY.
const f_26 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function f_28(element) {
    console.log(element)
}
// USING THE NORMAL WAY OF ACCESSING ELEMENTS IN AN ARRAY:
f_28(f_26[0]) // 1 IS DISP WHICH IS THE FIRST ELEMENT IN THE f_26 ARRAY.
f_28(f_26[1]) // 2 IS DISP WHICH IS THE 2ND ELEMENT IN THE f_26 ARRAY
f_28(f_26[14]) // 15 WHICH IS THE LAST ELEMENT IN THE ARRAY IS DISPLAYED.

// USING THE foreach METHOD TO ACCESS ALL THE ELEMENTS IN THE ARRAY ONCE:
f_26.forEach(f_28) // 1 TO 15 WILL BE DISPLAYED WHICH ARE THE ELEMENTS WE HAVE IN THE f_26 ARRAY.

// WE CAN ALSO DEFINE OUR f_28 FUNCTION INSIDE THE forEach STATEMENT AND THE SAME OUTPUT WILL BE GENERATED.
f_26.forEach(function (f_29) {
    console.log(f_29)
})

// WE CAN ALSO USE THE FOR OF STATEMENT:
for (let f_30 of f_26) {
    console.log(f_30)
}

// NOW LET USE PRINT OUT THE EVEN NUMBERS IN ARRAY f_26 USING THE ofrEach AND FOR OF STATEMENT:
for (let f_30 of f_26) {
    if(f_30 % 2 === 0) {
       console.log(f_30) 
    }
}

// USING THE forEach STATEMENT:
f_26.forEach(function (f_30){
    if(f_30 % 2 === 0){
        console.log(f_30)
    }
})

const movie_3 = [
    {
        title : "Game-Of-Thrones",
        Rating : 90
    },
    {
        title : "JUMONG",
        Rating : 99
    },
    {
        title : "THE MOVE",
        Rating : 72
    },
    {
        title : "WICKED ONE",
        Rating : 81
    },
    {
        title : "EMPRESS KI",
        Rating : 87
    }
]
movie_3.forEach(function(f_31){
    console.log(f_31)
}) // HERE, THE TITLE AND THE MOVIE WILL BE DISPLAYED.

// LET US TRY TO PRINT SOMETHING LIKE 'JUMONG - 99/100'
movie_3.forEach(function(f_31){
    console.log(`${f_31.title} - ${f_31.Rating}/100`)
}) 

// MAP: IT CREATES A NEW ARRAY WITH THE RESULTS OF CALLLING A CALLBACK ON EVERY ELEMENT IN THE ARRAY.
const f_33 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
f_33.map(function (f_34) {
    return f_34
}) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] IS DISPLAYED.

//LET US TRY TO MULTIPLY THE ELEMENTS IN THE f_34 ARRAY BY 2:
f_33.map(function (f_35) {
    return f_35 * 2;
}) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30] IS DISPLAYED.

let f_36 = ["Eba", "Rice", "Dodo", "Fufu", "Cassava"]
const f_37 = f_36.map(function (f_38) {
    return (f_38.toUpperCase())
}) // THE ITEMS IN ARRAY f_36 WILL BE CONVERTED TO UPPERCASE.
f_37 // ['EBA', 'RICE', 'DODO', 'FUFU', 'CASSAVA'] IS DISPLAYED.

const movie_4 = [
    {
        title : "Game-Of-Thrones",
        Rating : 90
    },
    {
        title : "JUMONG",
        Rating : 99
    },
    {
        title : "THE MOVE",
        Rating : 72
    },
    {
        title : "WICKED ONE",
        Rating : 81
    },
    {
        title : "EMPRESS KI",
        Rating : 87
    }
]
// USING THE map FUNCTION, LET US TRY TO DISPLAY ONLY THE movie TITLE.....
movie_4.map(function (f_39) {
    return f_39.title
}) // ['Game-Of-Thrones', 'JUMONG', 'THE MOVE', 'WICKED ONE', 'EMPRESS KI'] IS DISPLAYED

// RETURN BOTH MOVIE TITLE AND RATING:
movie_4.map(function (f_39) {
    return (f_39.title + ":- " + f_39.Rating)
})

// LET US TRY AND SAVE THE ABOVE TO A VARIABLE AND ALSO CONVERT THEM TO LOWER CASE.........
const f_40 = movie_4.map(function (f_41) {
    return f_41.title.toLowerCase()
})
f_40


// ARROW FUNCTIONS: A NEWER SYNTAX FOR DEFINING FUNCTIONS.
// WRITE A FUNCTION TO ADD 2 NUMBERS USING THE NORMAL FUNCTION METHOD AND THE ARROW FUNCTIONS
function f41(f_42, f_43) {
    return f_42 + f_43
}
f41(1,23)
// OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR
const f_41 = function(f_42, f_43) {
    return f_42 + f_43
} 
f_41(10,12) // 22 IS DISPLAYED.

// USING THE ARROW FUNCTION:
// SO INSTEAD OF USING function, WE WILL REPLACE IT WITH arrow function(=>), HENCE THE ABOVE CODE WILL BE WRITEEN AS:
const f_44 = (f_42, f_43) => {
    return f_42 + f_43
}

// USE THE ARROW FUNCTION TO COMPUTE THE SQUARE OF A NUMBER:
const f_44 = (f_45) => {
    return f_45**2
}
f_44(9)
f_44(25)

// WHEN USING THE ARROW FUNCTION, YOU HAVE TO AT LEAST PUT () EVEN IF IT HAS NO VALUE. SEE EXAMPLE BELOW:
const diceroll = () => {
    return Math.floor(Math.random() * 6) + 1
}
diceroll()

const f_46 = f_47 => {
    return "Hey " + f_47
}
f_46("Bossman") // 'Hey Bossman' IS DISPLAYED.

/* IN SUMMARY, WHEN WE HAVE 2 OR MORE ARGUMENTS(SUM 2 NUMBERS FUNCTION) OR NO ARGUMENT(diceroll FUNCTION) IN OUR FUNCTION, THEN WE SHOULD PUT THE ARGUMENT IN A PARENTHESIS ()
BUT WHEN WE HAVE ONLY 1 ARGUMENT(SQUARE A NUMBER FUNCTION), WE CAN DECIDE TO PUT IT OR NOT PUT IT IN A PARENTHESIS, OUR CODE WILL STILL RUN. */

// ARROW FUNCTON IMPLICIT RETURNS:
// NOTE: IMPLICIT RETURNS ONLY WORK IF THERE IS ONLY ONE EXPRESSION IN THE BODY OF YOUR FUNCTION.....
// IF ALL WE WANT TO RETURN IS A SINGLE RESULT, THEN WE CAN AVOID USING THE return KEYWORD. USE THE sum of 2 Number FUNCTION AS CASE STUDY.......
const dieroll = () => (
    Math.floor(Math.random() * 6) + 1
) // WITH THIS, WE HAVE REPLACED {} WITH () AND NEGLECTED THE return Keyword BECAUSE THE FUNCTION IS ONLY RETURNING A SINGLE VALUE AND WE DON'T NEED TO USE THE {} BUT () IS USED.
dieroll()

// WE CAN ALSO WRITE THE CDOE IN A SINGLE LINE IF ONLY WE ARE RETURNING A SINGLE VALUE...
// ONE-LINER IMPLICIT RETURN.....
const f_44 = (f_42, f_43) => f_42 + f_43
f_44(4,5) // 9 is DISPLAYED IN THE TERMINAL....

// MULTI CHOICE EXAMPLE OF THE SAME CODE BUT WRITTEN USING DIFFERENT FORMAT:
// TO CHECK IF A NUMBER IS AN EVEN NUMBER OR NOT..
const f_45 = function (f_46) {
    return f_46 % 2 === 0;    // REGULAR FUNCTION EXPRESSION. 
}

const f_45 = (f_46) => {
    return f_46 % 2 === 0;    // arrow function with parens() around parameter
}

const f_45 = f_46 => {
    return f_46 % 2 === 0;     // arrow function without parens() around parameter
}

const f_45 = f_46 => {
    f_46 % 2 === 0;         // Implicit Function
}

const f_45 = f_46 => f_46 % 2 === 0;     // one-liner Implicit Function.

// USING arrow FUNCTION WITH map FUNCTION:
const movie_5 = [
    {
        title : "Game-Of-Thrones",
        Rating : 90
    },
    {
        title : "JUMONG",
        Rating : 99
    },
    {
        title : "THE MOVE",
        Rating : 72
    },
    {
        title : "WICKED ONE",
        Rating : 81
    },
    {
        title : "EMPRESS KI",
        Rating : 87
    }
]

movie_5.map(function (f_48) {
    return `${f_48.title}- ${f_48.Rating / 10}`
})

// USING ARROW FUNCTION AND MAP TO WRITE THE ABOVE, WE WILL DO THE FFG:
const f_49 = movie_5.map((f_50) => {
    return `${f_50.title}- ${f_50.Rating / 10}`
})
f_49
// OR OR OR OR OR OR OR OR OR OR
const f_51 = movie_5.map((f_52) => (
    `${f_52.title}- ${f_52.Rating / 10}`
))
f_51
// OR OR OR OR OR OR OR OR OR OR
const f_53 = movie_5.map((f_54) => `${f_54.title}- ${f_54.Rating / 10}`)
f_53

// setTimeout AND setInterval: THEY HAVE TO DO WITH DELAYING AND PAUSING EXECUTION AND POSTPONING EXECUTION FOR A LATER DATE. BASICALLY REFERRING TO SCHEDULING THINGS.

// set Timeout EXPECTS 2 THINGS, A CALLBACK AND THE TIME IN MILISECONDS.
// setTimeout: THE CODE WILL RUN ONLY ONCE....
setTimeout(() => {
    console.log("HELLO......")
}, 3000) // HERE, THE TERMINAL WILL WAIT 3 SECONDS BEFORE PRINTING "HELLO...."

console.log("WELCOME WHEREVER YOU ARE....")
setTimeout(() => {
    console.log("OHKAYYYYY")
}, 5000)
console.log("TO THE TRENDING O.G.C GROUP")
// HERE, "WELCOME WHEREVER YOU ARE...." WILL BE DISPLAYED FIRST, FOLLOWED BY "TO THE TRENDING O.G.C GROUP" AND AFTER 5 SECONDS,OHKAYYY WILL BE PRINTED.

// setInterval WILL CALL A FUNCTION THAT WE PASS IN EVERY X NUMBER OF MILISECONDS.
const f_55 = setInterval(() => {
    console.log(Math.random())
}, 2000) // HERE, EVERY 2 SECONDS IT CONTINUES TO CALL THAT FUNCTION OVER AND OVER AGAIN UNTIL WE STOP IT USING THE clearInterval(name of the variable assigned) FUNCTION
// TO STOP PRINTING RANDOM NUMBERS, GO TO UR TERMINAL AND DO THE FFG:
// clearInterval(f_55)

// THE DIFFERENCE BETWEEN setTimeout and setInterval IS THAT, setTimeout WILL RUN ONCE BUT setInterval WILL RUN UNTIL WE CALL clearInterval()


// FILTER METHOD: CREATES A NEW ARRAY WITH ALL ELEMENTS THAT PASS THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION.......
const f_56 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const f_57 = f_56.filter((f_58) => {
    return f_58 % 2 === 1
})
f_57 // HERE AN ARRAY CONTAINING ELEMENTS THAT WHEN DIVIDED BY 2 GIVES A REMAINDER OF 1 FROM ARRAY f_56 WILL BE RETURNED.

const f_61 = f_56.filter(f_62 => f_62 % 2 === 0)
f_61 // HERE AN ARRAY CONTAINING ELEMENTS THAT WHEN DIVIDED BY 2 GIVES A REMAINDER OF 0 FROM ARRAY f_56 WILL BE RETURNED.

const f_59 = f_56.filter(f_60 => f_60 < 11)
f_59 // HERE AN ARRAY CONTAINING ELEMENTS LESS THAN 11 FROM ARRAY f_56 WILL BE DISPLAYED...

const movie_6 = [
    {
        title : "Game-Of-Thrones",
        Rating : 90,
        Year : 2012
    },
    {
        title : "JUMONG",
        Rating : 99,
        Year : 2009
    },
    {
        title : "THE MOVE",
        Rating : 62,
        Year : 1989
    },
    {
        title : "WICKED ONE",
        Rating : 75,
        Year : 1999
    },
    {
        title : "EMPRESS KI",
        Rating : 87,
        Year : 2010
    },
    {
        title : "Wringy",
        Rating : 51,
        Year : 1979
    }
]
const f_63 = movie_6.filter(f_64 => f_64.Year > 2000)
f_63 // RETURNS WHERE Year IS GREATHER THAN 2000 FROM the movie_6 ARRAY
const f_65 = movie_6.filter(f_66 => f_66.Rating < 80)
f_65 // RETURNS WHERE Rating IS LESS THAN 80 FROM THE movie_6 ARRAY.

// WE WILL USE THE MAP FUNCTION TO RETURN THE TITLE OF movies FROM FILTERED ARRAY f_63
f_63
const f_67 = f_63.map(f_68 => f_68.title)
f_67 // title OF MOVIE IN ARRAY f_63 WILL BE DISPLAYED. ['Game-Of-Thrones', 'JUMONG', 'EMPRESS KI']

// OR OR OR OR OR      :USING THE MAP AND FILTER FUNCTION:     TOGETHER OR OR OR OR OR OR OR 

// USING THE map AND filter FUNCTION TOGETHER AT ONCE
const f_69 = movie_6.filter(f_70 => f_70.Rating > 80).map(f_70 => f_70.title)
f_69 /* HERE, WE HAVE FILTERED THE movie_6 ARRAY TO ONLY RETURN Movie WHOSE Rating IS GREATHER THAN 80 AND FROM DERE WE HAVE MAPPED THE Title OF SUCH Movie TO A NEW ARRAY f_69,
MEANING THAT ONLY THE Title OF movie WHOSE Rating IS GREATHER THAN 80 WILL BE RETURNED. */

const f_71 = ["ADEYANJU_QUASIM","ADEYANJU","QUASIM","DEY_PLAY","ARREKKAA_CHICKEN","TOLU","AJEH SE NO BE CAP","JOPOS","OYA_NA_DEY_PLAY"]
f_71
const f_72 = f_71.filter(f_73 => f_73.length < 10).map(f_73 => f_73)
f_72 //// HERE, IT WILL GO THROUGH THE f_71 ARRAY AND THEN RETURN ELEMENTS WHOSE LENGTH IS LESS THAN 10

const f_77 = f_75 => f_75.filter(f_76 => f_76.length < 10)
f_77(["BOLA", "BOLA_AHMED", "TINUBU", "BOLA AHMED TINUBU"])
// THE ABOVE WILL CHECK AND RETURN ELEMENTS WHOSE LENGTH IS LESS THAN 10 ONCE THE FUNCTION IS RUN.....

// reduce METHOD: EXECUTES A REDUCER FUNCTION ON EACH ELEMENT OF THE ARRAY RESULTING IN A SINGLE VALUE...
[3,5,7,9].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}) // 24 IS RETURNED WHICH IS THE SUM OF THE ARRAY.
/* accumulator HOLDS 3 WHILE currentValue HOLDS 5 AND THE SUM WHICH IS 8 IS HELD AGAIN BY THE accumulator,
NOW THE currentValue is 7 WHICH IS ADDED TO 8 MAKING 15 IS ASSIGNED TO THE accumulator AND ADDED TO THE currentValue WHICH IS NOW 9 MAKING 24... */

function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Outputs: 10
console.log(sumArray([10, -5, 7])); // Outputs: 12
console.log(sumArray([])); // Outputs: 0

// HIGHER ORDER FUNCTION: are functions that can take other functions as inputs.
/* WE CAN WRITE A FUNCTION THAT WILL ADD 2 NUMBERS AND ANOTHER FUNCTION THAT CAN MULTIPLY 2 NUMBERS AND THEN LINK THE 2 TO 
ANOTHER calculator WHERE WE WILL ONLY NEED TO INPUT THE 1ST, 2ND AND THE OPERATOR(either add or multiply) NEEDED FOR THAT CALCULATION */
function add(number_1, number_2){
    return number_1 + number_2
}
function multiply(number_1, number_2){
    return number_1 * number_2
}
function calculator(number_1, number_2, operator){
    return operator(number_1, number_2)
}
calculator(2,3,multiply)
calculator(2,3,add)
/*THE ABOVE IS AN EXAMPLE OF HIGHER ORDER FUNCTION AND WE CAN SEE THAT WHAT WE ONLY NEED TO CALL IS THE NUMBER1, NUMBER2 AND
THE OPERATOR NEEDED. WHEN THE OPERATOR IS CALLED, THE calculator function PERFORMS THE OPERATION BASED ON THAT Function.
THIS IS DUE TO THE FACT THAT BOTH operator function HAS BEEN WRITTEN AS A FUNCTION IN OUR CODE AND NOW BEING CALLED BY THE calculator function.*/

/* HOW TO DEBUG YOUR CODE: GO TO YOUR CONSOLE AND TYPE IN debugger; THEN GO TO THE NEXT LINE AND INPUT THE CODE YOU WANT TO debug AND THEN RUN THE CODE,
USE THE ARROW UP,DOWN,RIGHT FOUND IN THE SNIPPETS/SOURCES PAGE TO GO DEEP AND UNDERSTAND YOUR CODE. TO debug OUR calculator function CODE, DO THE FFG: */
/* debugger;
calculator(2,3,multiply) */ // RUN THIS CODE IN THE TERMINAL AND NAVIGATE THROUGH TO UNDERSTAND YOUR CODE.


/* CONSTRUCTOR FUNCTION: A constructor function in JavaScript is a special type of function used to create and initialize objects.
When you use a constructor function, you can create multiple objects with the same properties and methods: */

/* CONSTRUCTOR Function Definition: Define a function with a name that typically starts with a capital letter to indicate that it is a constructor.
Properties and Methods: Use the 'this' keyword to assign properties and methods to the object being created.
Creating Instances: Use the new keyword to create new instances of the object. */
// EXAMPLE 1:
function Person(firstName, lastName, age) { // CREATE A CONSTRUCTOR FUNCTION THAT ACCPETS 3 PROPERTIES (firstName, lastName, age)
    this.firstName = firstName; // USING THE 'this' KEYWORD TO ASSIGN PROPERTY(firstName) AS THE FIRSTNAME OF THE INDIVIDUAL.
    this.lastName = lastName; // USING THE 'this' KEYWORD TO ASSIGN PROPERTY(lastName) AS THE LASTNAME OF THE INDIVIDUAL.
    this.age = age; // USING THE 'this' KEYWORD TO ASSIGN PROPERTY(age) AS THE age OF THE INDIVIDUAL.
    this.fullName = function() { // CREATES A METHOD fullname THAT CONCATS THE firstName AND lastName
        return this.firstName + " " + this.lastName; // WHENEVER the fullname FUNCTION IS CALLED, IT RETURNS THE firstName AND lastName
    };
}

// THE new keyword IS USED TO CREATE new instances of Person
const person1 = new Person("John", "Doe", 30); // A NEW PERSON INSTANCE HAS BEEN CREATED person1
const person2 = new Person("Jane", "Smith", 25); // person2 HAS BEEN CREATED.

console.log(person1.fullName()); // John Doe WILL BE DISPLAYED
console.log(person2.fullName()); // Jane Smith WILL BE DISPLAYED
person1.age // 20 IS DISP
person2.lastName // 'Doe' IS DISPLAYED.


// Constructor function EXAMPLE 2:
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

// Creating instances
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1.getCarInfo()); // 2020 Toyota Corolla
console.log(car2.getCarInfo()); // 2019 Honda Civic


// EXAMPLE 3:
function HouseKeeper(yearOfExperience, name, cleaningreportoire){
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningreportoire = cleaningreportoire;
    this.fullInfo = function() {
        return `${this.yearOfExperience} ${this.name} ${this.cleaningreportoire}`
    }
    this.clean = function() {
        alert("CLEANING IN PROGRESS.......")
    }
}
var houseKeeper1 = new HouseKeeper(10,"Quasim", ["Bathroom","Toilet"])
var housekeeper2 = new HouseKeeper(39, "Atiku", "Passage")
housekeeper2.fullInfo() // '39 Atiku Passage' IS DISPLAYED
houseKeeper1.name // "Quasim" IS DISPLAYED....
housekeeper2.clean() // AN ALERT DISPLAYING "CLEANING IN PROGRESS.." IS DISPLAYED.

// EXAMPLE 4: HOW THE built in Audio FUNCTION IS CREATED IN JAVASCRIPT:
function Audio(filelocation) {
    this.filelocation = filelocation;
    this.play = function() {
        // Tap into the Audio Hardware
        // Check the file at fileLocation exists
        // Check the file at fileLocation is a sound file
        // Play the file at fileLocation
    }
} 

var MUSIC = new Audio("C:/Users/Quasim/Music/AUD-20220914-WA0112.m4a")
MUSIC.play() // LINK THIS TO A WEBSITE AND THEN THE SOUND WILL BE PLAYED.

/* TO RUN A JAVASCRIPT, USE THE <script src = "" ><script>  INSIDE THE <body><body> TAG OF YOUR ELEMNT. 
NOTE THAT: YOU are to INCLUDE THE <script src = "" ><script> tagjust BEFORE THE CLOSING </body> tag TO ENSURE THE HTML CONTENT LOADS FIRST BEFORE ANY JAVASCRIPT IS EXECUTED WHICH CAN IMPROVE PAGE LOAD PERFORMANCE.
*/