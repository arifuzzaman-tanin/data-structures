// NOT OPTIMIZED
function productArray(arr) {
    if (arr.length === 0) {
        return [];
    }

    let parr = [];
    for (let i = 0; i < arr.length; i++) {
        let res = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                res = res === 0 ? arr[j] : res * arr[j]
            }
        }
        parr.push(res);
    }

    return parr;
}


// OPTIMIZED

function productArray(arr) {
    if (arr.length === 0) {
        return [];
    }

    let parr = [];
    for (let i = 0; i < arr.length; i++) {
        let res = 0;

        arr.filter((x) => x != arr[i]).map((x) => {
            res = res === 0 ? x : res * x;
            return res;
        });

        parr.push(res);
    }

    return parr;
}


nums = [1, 2, 3, 4];
console.log(productArray(nums));

// OUTPUT
// [ 24, 12, 8, 6 ]

