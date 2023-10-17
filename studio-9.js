function is_in_array(el, arr) {
    const len = array_length(arr);
    for (let i = 0; i < len; i = i + 1) {
        if (el === arr[i]) {
            return true;
        }
    }
    return false;
}

function count_pairs(x) {
    function count_iter(yee, I, x) {
        if (!is_pair(x)) {
            return 0;
        } else if (is_in_array(x, yee)) {
            return 0;
        } else {
            yee[i] = x;
            return 1 + 
                    count_iter(yee, I + 1, head(x)) +
                    count_iter(yee, i + 1, tail(x));
        }
    }
    return count_iter([], 0, x);
}

const p1 = pair(1, 2);
const p2 = pair(pair(1, p1), p1);
const p3 = pair(p2, p2);
count_pairs(p3);


