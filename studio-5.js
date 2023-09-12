// Q1
function every_second(lst) {
    return length(lst) <= 1
           ? null
           : pair(list_ref(lst, 1), every_second(tail(tail(lst))));
}

// Q2
function sum(lst) {
    return is_null(lst)
           ? 0
           : head(lst) + sum_el(tail(lst));
}

function sums(lst) {
    const odd_sum = sum(every_second(lst));
    const even_sum = sum(every_second(pair(0, lst)));
    return list(even_sum, odd_sum);
}

display(sums(list(1,2,3,4,5)));

/*----------------------------ANSWERS----------------------------------*/

// Q1 ITERATIVE SOLUTION
function every_second_it(items) {
    function helper(xs, result) {
        return is_null(xs) || is_null(tail(xs))
        ? reverse(result)
        : helper(tail(tail(xs)), pair(head(tail(xs)), result));
    }
    return helper(items, null);
}

// Q2 ITERATIVE SOLUTION
function sums_it(items) {
    function helper(xs, even_rank, even_sum, odd_sum) {
        return is_null(xs)
            ? list(even_sum, odd_sum)
            : even_rank
                ? helper(tail(xs), false, even_sum + head(xs), odd_sum)
                : helper(tail(xs), true, even_sum, odd_sum + head(xs));
    }
    return helper(items, true, 0, 0);
}

// Q2 RECURSIVE SOLUTION
function sums_re(xs) {
    if (is_null(xs)) {
        return list(0, 0);
    } else if (is_null(tail(xs))) {
        return list(head(xs), 0);
    } else {
        const wish = sums_re(tail(tail(xs)));
        return list(head(xs) + head(wish), head(tail(xs)) + head(tail(wish)));
    }
}