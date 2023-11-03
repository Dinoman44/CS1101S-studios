// S11 in-class
// Q1 a) stream_pairs(ints) = [[1, 2], [() => [[1, 2], () => ...]] until [4, 5]
/*b) it pairs each element with the previous one(starting with the 2nd element)
and had nullary functions that are not evaluated; if they were, they would
result in all elements paired with each other */

// c) an infinitely evaluated stream

// d) it ensures that the infinite stream is not evaluated completely

// e) [1, 2], [1, 3], [1, 4], [1, 5]...


function stream_pairs(s) {
    return is_null(s)
    ? null
    : stream_append(
        stream_map(
            sn => pair(head(s), sn),
            stream_tail(s)),
        stream_pairs(stream_tail(s)));
}

const ints = pair(1, () => pair(2, () => pair(3, () => pair(4, () => pair(5, () => null)))));
eval_stream(stream_pairs(ints), 6);

function stream_append_pickle(xs, ys) {
    return is_null(xs)
    ? ys()
    : pair(head(xs),
            () => stream_append_pickle(stream_tail(xs),
                                            ys));
}
function stream_pairs2(s) {
    return is_null(s)
    ? null
    : stream_append_pickle(
        stream_map(
            sn => pair(head(s), sn),
            stream_tail(s)),
        () => stream_pairs2(stream_tail(s)));
}

eval_stream(stream_pairs2(integers_from(1)), 6);

function stream_append_pickle2(xs, ys) {
    return is_null(xs)
           ? ys()
           : pair(head(xs), () => stream_append_pickle2(ys, stream_tail(xs)));
}

function stream_pairs3(s) {
    return is_null(s)
           ? null
           : stream_append_pickle2(
                    stream_map(
                        x => pair(head(s), x),
                        s),
                    () => stream_pairs3(stream_tail(s)));
}

eval_stream(stream_pairs3(integers_from(1)), 6);


