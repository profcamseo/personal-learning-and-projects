/*============================
Using the Test Method
============================*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result);

/*============================
Match Literal Strings
============================*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

/*============================
Match a Literal String with Different Possibilities
============================*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

/*============================
Ignore Case While Matching
============================*/

let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i; // Change this line
let result = fccRegex.test(myString);

/*============================
Extract Matches
============================*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

/*============================
Find More Than the First Match
============================*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

/*============================
Match Anything with Wildcard Period
============================*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

/*============================
Match Single Character with Multiple Possibilities
============================*/

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

/*============================
Match Letters of the Alphabet
============================*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

/*============================
Match Numbers and Letters of the Alphabet
============================*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/*============================
Match Single Characters Not Specified
============================*/

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/

/*============================
Ignore Case While Matching
============================*/
