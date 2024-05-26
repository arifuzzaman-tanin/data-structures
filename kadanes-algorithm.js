function maxSubarraySum(arr) {
    let currentBest = Number.NEGATIVE_INFINITY;
    let overallBest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        currentBest = Math.max(arr[i], currentBest + arr[i])
        overallBest = Math.max(overallBest, currentBest)
    }
    return overallBest;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums));

// OUTPUT
// 6