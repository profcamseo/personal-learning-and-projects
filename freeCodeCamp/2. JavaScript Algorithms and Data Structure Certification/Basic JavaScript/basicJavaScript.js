/*============================
Comment Your JavaScript Code
============================*/

// This is an in-line comment.
/* This is a
multi-line comment */

/*============================
Declare JavaScript Variables
============================*/

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

// Example
var ourName;

// Declare myName below this line
var myName;
myName = "Cameron";

/*============================
Storing Values with the Assignment Operator
============================*/

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = 7;
b = a;

/*============================
Initializing Variables with the Assignment Operator
============================*/

// Example
var ourVar = 19;

// Only change code below this line
var a = 9;

/*============================
Understanding Uninitialized Variables
============================*/

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

/*============================
Understanding Case Sensitivity in Variable
============================*/

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/*============================
Add Two Numbers with JavaScript
============================*/

var sum = 10 + 10;

/*============================
Subtract One Number from Another with JavaScript
============================*/

var difference = 45 - 33;

/*============================
Multiply Two Numbers with JavaScript
============================*/

var product = 8 * 10;

/*============================
Divide One Number by Another with JavaScript
============================*/

var quotient = 66 / 33;

/*============================
Increment a Number with JavaScript
============================*/

var myVar = 87;

// Only change code below this line
myVar++;

/*============================
Decrement a Number with JavaScript
============================*/

var myVar = 11;

// Only change code below this line
myVar--;

/*============================
Create Decimal Numbers with JavaScript
============================*/

var ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 2.1;

/*============================
Multiply Two Decimals with JavaScript
============================*/

var product = 2.0 * 2.5;

/*============================
Divide One Decimal by Another with JavaScript
============================*/

var quotient = 4.4 / 2.0;

/*============================
Finding a Remainder in JavaScript
============================*/

var remainder;
remainder = 11 % 3;

/*============================
Compound Assignment With Augmented Addition
============================*/

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

/*============================
Compound Assignment With Augmented Subtraction
============================*/

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

/*============================
Compound Assignment With Augmented Multiplication
============================*/

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

/*============================
Compound Assignment With Augmented Division
============================*/

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

/*============================
Declare String Variables
============================*/

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

var myFirstName = "Cameron";
var myLastName = "Milner";

/*============================
Escaping Literal Quotes in Strings
============================*/

var myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

/*============================
Quoting Strings with Single Quotes
============================*/

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*============================
Escape Sequences in Strings
============================*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/*============================
Concatenating Strings with Plus Operator
============================*/

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";

/*============================
Concatenating Strings with the Plus Equals Operator
============================*/

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/*============================
Constructing Strings with Variables
============================*/

// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Cameron";
var myStr = "Hello, our name is " + myName + " Milner";

/*============================
Appending Variables to Strings
============================*/

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;

/*============================
Find the Length of a String
============================*/

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

/*============================
Use Bracket Notation to Find the First Character in a String
============================*/

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

/*============================
Understand String Immutability
============================*/

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me

/*============================
Use Bracket Notation to Find the Nth Character in a String
============================*/

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

/*============================
Use Bracket Notation to Find the Last Character in a String
============================*/

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

/*============================
Use Bracket Notation to Find the Nth-to-Last Character in a String
============================*/

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

/*============================
Word Blanks
============================*/

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks =
  "the " + myNoun + " " + myVerb + " " + myAdjective + " " + myAdverb; // Only change this line;

/*============================
Store Multiple Values in one Variable using JavaScript Arrays
============================*/

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["John", 23];

/*============================
Nest one Array within Another Array
============================*/

// Example
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];

// Only change code below this line.
var myArray = [
  ["the universe", 42],
  ["everything", 101010],
];

/*============================
Access Array Data with Indexes
============================*/

// Example
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50, 60, 70];

// Only change code below this line.

var myData = myArray[0];

/*============================
Modify Array Data With Indexes
============================*/

// Example
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18, 64, 99];

// Only change code below this line.
myArray[0] = 45;

/*============================
Access Multi-Dimensional Arrays With Indexes
============================*/

// Setup
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Only change code below this line.
var myData = myArray[2][1];

/*============================
Manipulate Arrays With push()
============================*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line.
myArray.push(["dog", 3]);

/*============================
Manipulate Arrays With pop()
============================*/

// Example
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

/*============================
Manipulate Arrays With shift()
============================*/

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
