// Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.

// Example: 

// Input: arr[] = {3, 1, 4, 6, 5} 
// Output: True 

function countTriples(nums) {
    nums = nums.map((x) => x * x);

    for (let i = 0; i < nums.length; i++) {
        let components = {};
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                let next = nums[i] - nums[j];
                if (next in components) {
                    return true;
                }
                else {
                    components[nums[j]] = j;
                }
            }
        }
    }

    return false;
}
const nums = [3, 1, 4, 6, 5];
console.log(countTriples(nums));

// OUTPUT
// true