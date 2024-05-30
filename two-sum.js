//Brute force | O(n^2)
function TwoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let next = target - nums[i];
        for (let a = i + 1; a < nums.length; a++) {
            if (nums[a] === next) {
                return [i, a];
            }
        }
    }

    return []
}

nums = [2, 7, 11, 15]
target = 26
console.log(TwoSum(nums, target))


//Optimized (Best) | O(n)
function TwoSum(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in obj) {
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
    
    return [];
}

const nums = [2, 7, 11, 15];
const target = 26;
console.log(TwoSum(nums, target)); 

// OUTPUT
// [ 2, 3 ]