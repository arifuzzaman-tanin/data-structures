function findSumOfTwo(arr, n) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        let component = n - arr[i];
        if (component in obj) {
            return true;
        }
        else {
            obj[arr[i]] = component;
        }
    }

    return false;
}

const arr = [5, 7, 1, 2, 8, 4, 3];
const n = 12;
console.log(findSumOfTwo(arr, n))

// OUTPUT
// true