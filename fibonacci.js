function fibonacci(limit) {
    const sequence = [];
    let a = 0;
    let b = 1;

    if (limit >= a) sequence.push(a);
    if (limit >= b) sequence.push(b);

    while (true) {
        let next = a + b
        if (next > limit) break;
        sequence.push(next);
        a = b;
        b = next;
    }

    return sequence;
}

console.log(fibonacci(10));

// OUTPUT
// [
//     0, 1, 1, 2,
//     3, 5, 8
// ]