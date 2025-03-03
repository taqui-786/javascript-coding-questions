// 1. Currying 
// Currying is a useful technique used in JavaScript applications.
// There are two ways to do make a currying function one is with bind method and one is with closure

// * Question *
// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
curriedJoin(1, 2, 3); // '1_2_3'
curriedJoin(1)(2, 3); // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'

// -------------------------------- Example with bind() ---------------------------------------

function multiply(x, y) {
  console.log(x * y);
}
const letsBindthem = multiply.bind(this, 2);
letsBindthem(5); // output - 10

// -------------------------------- Example with Closures ---------------------------------------
function multiply(x) {
    return function (y) {
        console.log(x * y);
    };
}

const letsBindthem = multiply(2);
letsBindthem(5); // output - 10
// -------------------------------- *** Solution here *** ---------------------------------------
function curry(fn, ...args) {
  return args.length >= fn.length 
      ? fn(...args) 
      : (...nextArgs) => curry(fn, ...args, ...nextArgs);
}

// ---------------------------------------------------------------------------------------------

// Key Takeaways ++++++++++

// ✅ Currying allows us to call a function with arguments one at a time instead of all at once.
// ✅ The function stores arguments and waits until it has enough before executing.
// ✅ Recursion is used to collect arguments over multiple function calls.