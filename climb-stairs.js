// Problem: You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example:

// Input: n = 3
// Output: 3
// Explanations:
// 1 step + 1 step + 1 step
// 1 step + 2 steps
// 2 steps + 1 step


// f(n) = f(n-1) + f(n-2)
// n = 5
// f(1) = 1
// f(2) = 2

// f(3) = f(3-1) + f(3-2) = f(2) + f(1) = 2 + 1 = 3
// f(4) = f(4-1) + f(4-2) = f(3) + f(2) = 3 + 2 = 5
// f(5) = f(5-1) + f(5-2) = f(4) + f(3) = 5 + 3 = 8



function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let arr = new Array();
    arr[1] = 1;
    arr[2] = 2;

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}
console.log(climbStairs(5));

// OUTPUT
// 8