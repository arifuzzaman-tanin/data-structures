function FindMissing(arr, n) {
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]
    }
    // sum of n th = (n * (n+1)) / 2
    // missing number = sum of n th - actual sum
    let sumOfn = (n * (n + 1)) / 2;

    return sumOfn - actualSum;
}

const arr = [1, 2, 3, 5];
const n = 5;

console.log(FindMissing(arr, n))


// OUTPUT
// 4