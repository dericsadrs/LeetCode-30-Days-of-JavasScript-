/*Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10
*/


//Here we declate a variable called createHelloWorld which is assigned with a function,
// In that function we return a HelloWorld


//shorthand for anonymous function
var createHelloWorld = function() {

        //shorthand for anonymous function
        return () => "Hello World";
};


console.log(createHelloWorld)