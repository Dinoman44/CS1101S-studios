import { 
    square,
    blank,
    ribbon,
    heart,
    circle,
    show,
    stack,
    beside,
    beside_frac,
    stack_frac,
    make_cross,
    quarter_turn_right as qtr
} from "rune";

function moony_1(bottom_right) {
    return stack(beside(circle, blank), beside(square, bottom_right));
}

show(moony_1(ribbon));

function moony_2(n) {
    return n === 1
           ? circle
           : stack(
               beside(circle, blank),
               beside(square, moony_2(n - 1)));
        // alternate: moony_1(moony_2(n - 1))
}

show(moony_2(5));

function moony(n) {
    return n === 1
           ? circle
           : stack_frac(
               1 / n,
               beside_frac(1 / n, circle, blank),
               beside_frac(1 / n, square, moony(n - 1)));
}

show(make_cross(moony(5)));
show(make_cross(qtr(qtr(moony(5)))));

// Recursive process
// O(n) for time and space
// Assume that each primitive operation takes the same amount of time
// and each rune takes up the same memory


function expt(b, n) {
    return n === 0 ? 1 : b * expt(b, n-1);
}

expt(10, 4);

// Recursive process
// Θ(n) for space and time wrt n
// Θ(1) for space and time wrt b

function fast_expt(b, n) {
    return n === 0
           ? 1
           : n % 2 === 0
             ? fast_expt(b * b, n / 2)
             : b * fast_expt(b, n - 1);
}

function fast_iter_expt(b, n) {
    return iter_expt(1, b, n);
}

function iter_expt(product, b, n) {
    return n === 0
           ? product / b
           : n % 2 === 0
             ? iter_expt(product * b * b, b, n / 2)
             : iter_expt(product * b, b, n - 1);
}

fast_expt(3, 4);
fast_iter_expt(10, 10);

// O(n) but Θ(log n) runtime for both functions

/* function fact_recurse(x) {
    return x === 1
           ?
           1
           :
           x === 0
           ?
           1
           :
           x * fact_recurse(x - 1);
}

fact_recurse(5);

function fact_iter(x) {
    return iter(1, 1, x);
}

function iter(count, product, x) {
    return count === x
           ?
           product
           :
           iter(count + 1, product * count, x);
}

fact_iter(10); */