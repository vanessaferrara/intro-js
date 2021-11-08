////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
////////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. Computations.
////////////////////////////

// Perform the following computations and store the results in four
// separate variables named a, b, c, and d.
// Multiply these variables to obtain the size of the population
// of the city of Luzern as reported by Wikipedia Eng. as of 03.06.2020.
// Update 11.07.2021 Population in Luzern did not change according to Wikipedia.

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