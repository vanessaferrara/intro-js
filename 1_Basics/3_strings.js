////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
////////////////////////////////////////////////////////////////////////////////


// EXERCISE 5. String manipulation.
///////////////////////////////////

// a. Join together these two strings and assign the result to a new variable
// named finalStr.
str1 = "Always remember that you are absolutely unique.";
str2 = 'Just like everyone else.';


// b. Did you remember to add a space between them?
// If so, how many characters is the final string?


// c. Did you know that you can also join strings and numbers together?
// Replace str2 with a new sentence that includes the total population count
// of the city of Luzern that you just computed. For example:
// "Just like other X persons in Luzern." (X to be replaced with the count)
// Then, join it with str1 and update finalStr.
// Important. String must end with a dot (needed for exercise below).


// d. Alternatively, you can specify strings using the backtick sign `
// which allows for in-string variable substitution.


// e. If you made it until now, you may prefer a more positive message
// in the finalStr variable. Extract a substring which contains only
// the first part.
// Hint: Use substring and the length property.


// f. Now shout it loud and make the it upper case.
// Hint: Use toUpperCase.


// g. Let's be honest. An upper case sentence must end with an exclamation mark.
// Replace the dot at the end of the sentence with an exclamation mark.


// EXERCISE 6. Constants.
/////////////////////////

// You just unlocked a great insight with exercise 5, which is contained in
// the variable finalStr. You do not want anybody to change that string
// ever again, so you decide it to assign it to constant.
const myFinalStr = finalStr;
console.log(myFinalStr);

// Now try to change it to something else.
myFinalStr = 'something else';

// You should have seen error below. We will later learn that constants behave
// differently with objects, but for now you are done, you completed the first
// exercise sheet!

// Pat yourself on the back or ask the person to your right to do it,
// if that is appropriate.

// Online version: give yourself a victory emoji, or ask a random stranger
// Twitter 
