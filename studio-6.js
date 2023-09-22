// Studio S6 in-class

// Q1
function remove_duplicates(lst) {
    if (is_null(lst)) {
        return null;
    }
    else {
        return accumulate((x, y) => tail(member(x, lst)), null, lst);
    }
}

const x = list(1, 1, 2, 3, 4, 4);
remove_duplicates(x);

// Q2
function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    }
    else {
        const no_use_head = subsets(tail(xs));
        const use_head = map(x => pair(head(xs), x), no_use_head);
        
        return append(use_head, no_use_head);
    }
}

const y = list(1, 2, 3);
subsets(y);

// Q3
function permutations(s) {
    if (is_null(s)) {
        return null;
    }
    else if (length(s) === 1) {
        return s;
    }
    else if (length(s) === 2) {
        return list(s, reverse(s));
    }
    else {
        return map(
            x => list(
                pair(x,
                    head(permutations(remove(x, s)))),
                pair(x,
                    tail(permutations(remove(x, s))))),
            s);
    }
}

function their_answer(s) {
    return is_null(s)
           ? list(null)
           : accumulate(append, null, 
                map(x => map(p => pair(x, p), permutations(remove(x, s))), s));
}

const z = list(1, 2, 3, 4);
permutations(z);




