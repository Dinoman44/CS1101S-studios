// Task 1A
function insert_subseq(L, pos, S) {
    if (pos === 0) {
        return append(S, L);
    } else if (pos === length(L)) {
        return append(L, S);
    } else if (is_null(S)) {
        return L;
    } else if (is_null(L)) {
        return S;
    }
    else {
        let m = null;
        let fcopy = L;
        let i = 0;
        while (i < pos) {
            m = pair(head(fcopy), m);
            fcopy = tail(fcopy);
            i = i + 1;
        }
        return append(append(reverse(m), S), fcopy);
    }
} // all works


// Task 1B
function remove_subseq(L, start_pos, end_pos) {
    if (is_null(L)) {
        return L;
    } else {
        let res = null;
        let i = 0;
        let copy = L;
        while (!is_null(copy)) {
            if (!(i <= end_pos && i >= start_pos)) {
                res = pair(head(copy), res);
            }
            i = i + 1;
            copy = tail(copy);
        }
        return reverse(res);
    }
} // all works


// Task 2A
function is_prefix_of(subseq, seq) {
    if (is_null(subseq)) {
        return true;
    } else if (is_null(seq)) {
        return false;
    } else {
        if (head(subseq) === head(seq)) {
            return is_prefix_of(tail(subseq), tail(seq));
        } else {
            return false;
        }
    }
} // all works


// Task 2B
function tail_n_times(xs, n) {
    return is_null(xs) ? null : n <= 0 ? xs : tail_n_times(tail(xs), n - 1);
}

function subseq_replace(new_sub, old_sub, seq) {
    if (is_null(new_sub)) {
        return seq;
    } else if (!is_null(old_sub)) {
        let copy = seq;
        const n = length(old_sub);
        let res = null;
        let holder = null;
        while (!is_null(copy)) {
            if (is_prefix_of(old_sub, copy)) {
                res = append(new_sub, append(reverse(holder), res));
                holder = null;
                copy = tail_n_times(copy, n);
            } else {
                holder = pair(head(copy), holder);
                copy = tail(copy);
            }
        }
        return append(reverse(holder),  res);
    }
} // all works


// Task 3A
function make_NiFT(T) {
    let copy = T;
    let res = null;
    let holder = null;
    while (!is_null(copy)) {
        if (is_number(head(copy))) {
            holder = pair(head(copy), holder);
        } else {
            res = pair(make_NiFT(head(copy)), res);
        }
        copy = tail(copy);
    }
    return append(reverse(holder), reverse(res));
} // all works





















