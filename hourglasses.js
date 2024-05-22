function hourglassSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const arrayWeight = arr[0].length;
    const arrayHeight = arr.length;

    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arrayHeight - 2; i++) {
        for (let j = 0; j < arrayWeight - 2; j++) {
            let sum = arr[i][j] + arr[i][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] +
                arr[i + 2][j + 2] +
                arr[i][j + 2] + arr[i + 1][j + 1];
            max = max < sum ? sum : max;
        }
    }
    return max;
}

const hourglassArray =
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]

console.log(hourglassSum(hourglassArray))

