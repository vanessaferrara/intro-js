////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
////////////////////////////////////////////////////////////////////////////////
// PS: I know I have the same heading also for Part 0, so this is not
// technically the first sheet, but but Part 0 does not count.

// Enough said. Let's begin with the basics of JavaScript!

// We will start with the "primitive types."

// A primitive type (or simply a type) is a category af variables
// that share a set of common features.

// Wait! I am assuming you know what a variable is. If you are 
// unsure here is a definition:

// Variables are "labels" or "pointers" that hold some data; pretty much like
// the x and y variables in math, but much more fun to work with :)  

// Important: do not get bored!
// Are these exercises too easy? If so, just continue with the
// exercises in the next file at your own pace. You will find all the
// solutions in the folder called solutions.


// EXERCISE 0. Primitive Types.
///////////////////////////////

// Not really an exercise, it is more a small warm up to recall the different
// primitive types in JavaScript and to get you familiar with your text editor.

// Important: Refresher about how to execute the code! 

// VSCode users need the Code Runner extensions.
// Select the portion of the code they want to run and:
// - Press Ctrl-N
// - Right Click: Run Code

// Atom Users need the Hydrogen package.
// - to execute the line where the cursor is, press Ctrl-Enter.
// - to execute multiple lines at once, highlight them, and press Ctrl-Enter.

// Hydrogen Atom users should avoid declaring variables with let.
// This has the advantage that you can re-run the same command without
// throwing errorr such as "variable already defined",
// This has also the disadvantage that the linter (if enabled) will complain 
// about undefined variables. Let it complain, he is a grumpy old linter.


// Primitive types (or primitives) are the building block of any programming
// language, and they are represented at the lowest level of its implementation.

// A primitive type is piece of data that is not an object and has no methods. 

// In JavaScript there are 7 primitive types: string, number, bigint, boolean,
// undefined, symbol, and null.

// Here is an example of a primitive string.
primitive = 'I am so primitive.';

// You can output the value of primitive with console.log().
console.log(primitive);

// Or slightly nicer:
console.log('The value of the variable primitive is: ' + primitive);

// We will learn more about strings concatenation later, but for now just know
// the plus sign (+) will join two strings together.

// EX. Making Progress.

// Beware: primitive types are immutable! Don't even try to change them.
// All your efforts would be in vain. So what's the Catch 22? No need to 
// change them, simply _replace_ them.

primitive = 'I am so primitive.';
console.log(primitive);
primitive = 'I am no longer primitive. I am making progress!'
console.log(primitive);

// Technical Note! Before I said, that primitive types are immutable, are not
// an object. While, this is true in JavaScript primitive types are wrapped in 
// an object before you operate with them and may have methods. More on this
// later.

// EX Be a looser.

// In JavaScript, variables are loosely typed. What does it mean? 
// It has nothing to do with keeping your fingers loose while you type.
// It means that you are allowed to replace the content of a variable with 
// data of different primitive type. 

// Loosely typed programming language (like JavaScript or Perl) are opposed to
// strongly typed programming (like TypeScript or Java), in which switching
// the primitive type of a variable after assignment will throw an error.

// Strongly typed programming language may gain in performance and may help
// catching and debugging runtime errors. Loosely typed programming languages
// are more flexible and more...loose. It's up to the programmer to be
// disciplined and do type checking where appropriate. 


// Fully embrace the looseness of JavaScript by creating a variable named morph
// and by assigning a value to it for each primitive type in JavaScript. 

// Use the typeof operator to print the type of a variable. 
// Be ready for some surprises.

// Numbers.

// integer.
morph = 1;

console.log('Morph: ' + morph);
console.log('Morph type is: ' + typeof morph);
// It is good practice to always add the semicolon at the of a statement.

// Floating point.
morph = 1.1;

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// Both floating point and integer numbers belong to the same primitive
// type: 'number'. Other programming language may distinguish different
// subtypes, such as positive-only, floating point, etc, to save space
// in memory. However, your life is easier, they are all numbers.


// Strings

morph = 'I morphed into a string.'

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// A one-type character string is also a string. Other languages have
// the type 'char' for this special case, but not JS.

morph = 'A';

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// Booleans.

morph = true;

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

morph = false;

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// Not much to say about booleans, right?

// Undefined.

morph = undefined;

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// If something does not exist or has not yet been initialized, its type
// is 'undefined'. See below.

let iAmNotDefinedYet;

console.log('iAmNotDefinedYet: ' + iAmNotDefinedYet);
console.log('iAmNotDefinedYet type is now: ' + typeof iAmNotDefinedYet);

// Null

// There are other two important types: 'object', and 'function'.
// We will learn more about those in the next exercises.

// Less used primitives: BigInts, Symbols

// Bigints represent whole numbers larger than 2^53 - 1. You probably won't 
// use them a lot.

morph = 1n;

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// Symbols are variables that guaranteed to be unique. You probably won't 
// use them a lot.

morph = Symbol('I am unique');

console.log('Morph: ' + morph);
console.log('Morph type is now: ' + typeof morph);

// EXERCISE 1. Computations.
////////////////////////////

// Perform the following computations and store the results in four
// separate variables named a, b, c, and d.
// Multiply these variables to obtain the size of the population
// of the city of Luzern as reported by Wikipedia Eng. as of 03.06.2020.

// a. Compute (18 + 107) / (5 * 25)

console.log(a);

// b. Compute the square root of one million.

console.log(b);

// c. Take the remainder of the division betwen 123 and 9 squared, minus 1.

console.log(c);

// d. Take the integer part of the float number 2.123456789 (need to use Math).

console.log(d);

// Now compute:
console.log(a*b*c*d);

// EXERCISE 2. Variable Naming.
///////////////////////////////

// Assign the value of the previous computation to variable with a proper name.

// Long Hint. It is really important to name variables with meaningful names.
// I mean, not meaningful for you, such as the name of your best friend
// or of your dog, but meaningful with respect to the context of
// the computer program in which they are executed.
//
// For instance, you could name the variable in this exercise:
// the_population_of_Luzern_according_to_Wikipedia
// However, that would be impractically long. A better name would be:
// Luzern_Population
//
// However, you can do even better. In fact, every programming language
// has fixed conventions for variable naming. In JavaScript, variables
// should begin with a lower case letter and any following word should be
// merged in a "camel case" manner. That is: without seperating characters
// and with a upper case for the first letter of every next word. So:
// luzernPopulation
// is probably a good candidate. But the final choice is yours!
luzernPopulation = a*b*c*d;
console.log(luzernPopulation);

// EXERCISE 3. Random numbers.
//////////////////////////////

// a. Generate a random number between 0 and 1, and store its value
// in a variable (and pick a proper name for the variable!).
// Hint. The Math object is your friend.


// b. Update the variable so that the value of the random number is
// between 0 and the one hundred thoudands.


// EXERCISE 4. Conditionals.
////////////////////////////

// A small intro to conditionals, more on this later.
// Write a short code statement that compares the size of the population
// in Luzern computed in Exercise 1 with the random number you generated
// in Exercise 3. If the random number is larger than the population of
// Luzern print "Go Luzern!", if exactly equal print "Are we in the Matrix?",
// otherwise print "Few but good!"
// Hint: Use console.log to print.


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
