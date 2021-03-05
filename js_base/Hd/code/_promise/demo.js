function _exec(executor) {
    executor(add, subtraction);
}

function add(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}