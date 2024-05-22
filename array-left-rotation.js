function rotateLeft(d, arr) {
    const rotatedArray = arr.slice(d).concat(arr.slice(0, d))
    return rotatedArray;
}

const a = [1, 2, 3, 4, 5]
console.log(rotateLeft(4, a))
