function merge(arr) {
    if (arr.length === 0) {
        return [];
    }

    let merged = [];
    const pair = arr.length / 2;
    const remainder = arr.length % 2;
    const actualPair = pair - remainder;

    for (let i = 0; i <= actualPair; i += 2) {
        let obj = {};
        for (let j = arr[i][0]; j <= arr[i][1]; j++) {
            if (!obj[j]) {
                obj[j] = true;
            }
        }

        let hasCommon = false;
        for (let j = arr[i + 1][0]; j <= arr[i + 1][1]; j++) {
            if (obj[j] === true) {
                hasCommon = true;
            }
        }

        if (hasCommon) {
            merged.push([arr[i][0], arr[i + 1][1]]);
        }
        else {
            merged.push([arr[i][0], arr[i][1]]);
            merged.push([arr[i + 1][0], arr[i + 1][1]]);
        }
    }

    if (remainder !== 0) {
        merged.push([arr[arr.length - 1][0], arr[arr.length - 1][1]]);
    }

    return merged;
}

const a = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(a));