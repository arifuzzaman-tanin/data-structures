
function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a);
    return nums.slice(k - 1, k);
}
const nums = [1, 23, 12, 9, 30, 2, 50], k = 3;
console.log(findKthLargest(nums, k));

// OUTPUT
// [ 23 ]