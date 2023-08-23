// Reflection R1 worksheet

const size = 2; // constant declaration
5 * size; // arithmetic expression

// Q1
const x = 3;
true ? 1 + 1 : 17; // output is 2
x > 0 ? x : -x; // output is 3
x === 0 ? 1 : 2; // output is 2
true ? 1 : y < 1 ? 4711 : 42; // undeclared variable error


// Q2
function square(x) {
    return x * x;
}

square(5); // output is 25

function hypothenuse(a, b) {
    return math_sqrt(square(a) + square(b));
}

hypothenuse(3, 4); // output is 5

// Q3
1 + 2 * 3 + 4; // output is 11
// = 1 + 6 + 4
// = 7 + 4
// = 11
// Uses BODMAS

1 + 2 >= 3 ? 4 * 5 : 6 + 7; // output is 20
// evaluates 1 + 2 = 3
// checks condition: 3 >= 3 ?
// condition is true, so consequence is evaluated
// 4 * 5 = 20 so output is 20