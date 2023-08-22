function biggie_size(reg) {
    return reg+4;
}

function unbiggie_size(biggie) {
    return biggie-4;
}

function is_biggie_size(size) {
    return size > 4;
}

function combo_price(size) {
    return size > 4 ? (size - 4) * 1.17 + 0.50 : size * 1.17;
}

function empty_order() {
    return 0;
}

function add_to_order(order, combo) {
    return order * 10 + combo;
}

function last_combo(order) {
    return order % 10;
}

function other_combos(order) {
    return (order - (order % 10)) / 10;
    // alternate
    // return math_floor(order / 10);
}

biggie_size(3);
unbiggie_size(6);
is_biggie_size(1);
is_biggie_size(7);
combo_price(2);
combo_price(6);
empty_order();
add_to_order(23, 1);
last_combo(3214);
other_combos(3214);