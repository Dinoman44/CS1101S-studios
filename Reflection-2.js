const z = 1;

function f(g) {
    const z = 3;
    return g(z);
}

f(y => y + z);

/*
f(y => y + z)
-> f(z_in_function + z_in_main)
-> f(3 + 1)
-> 4
*/

function my_sum(n) {
    return n === 1
           ? 2
           : my_sum(n - 1) + (n * (n + 1));
}

// Recursive process, since there are deferred operations
// Theta(n) for time and space

function sum(term, a, next, b) {
    return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function my_ho_sum(n) {
    function base(n) {
        return n * (n + 1);
    }
    function next(n) {
        return n + 1;
    }
    return sum(base, 1, next, n);
}