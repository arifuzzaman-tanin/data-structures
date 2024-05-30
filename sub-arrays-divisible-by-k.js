function SubArraysDivisibleByK(arr, k) {
    let sum = 0;
    let remainder = 0;
    const obj = { 0: 1 }
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        remainder = sum % k;

        if (remainder < 0) {
            remainder += k;
        }

        if (remainder in obj) {
            count += obj[remainder];
            obj[remainder] += 1;
        }
        else {
            obj[remainder] = 1;
        }
    }

    return count;
}



const arr = [2, 4, 8, 1, 7, 3, 6, 1, 9, 2, 7];
console.log(SubArraysDivisibleByK(arr, 5));