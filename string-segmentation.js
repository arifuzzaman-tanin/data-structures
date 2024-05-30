//Brute force | O(n^2) | Loop counted 51
function stringSegmentation(arr, str) {
    if (arr.length === 0 || str.length === 0) {
        return [];
    }

    const components = {};
    for (let i = 0; i < arr.length; i++) {
        let to = 0;
        let from = arr[i].length;
        for (let j = 0; j < str.length; j++) {
            if (str.slice(to, from) === arr[i] && !components[arr[i]]) {
                components[arr[i]] = true
            }
            to++;
            from++;
        }
    }
    let segments = [];
    for (const key in components) {
        segments.push(key);
    }

    return segments;
}

//Optimized (Best) | O(n^2) |  Loop counted 40
function stringSegmentation(arr, str) {
    if (arr.length === 0 || str.length === 0) {
        return [];
    }

    const components = new Set();
    for (let i = 0; i < arr.length; i++) {
        const wordLen = arr[i].length;
        const strLen = str.length;
        for (let j = 0; j <= strLen - wordLen; j++) {
            if (arr[i] === str.slice(j, j + wordLen)) {
                components.add(arr[i]);
            }
        }
    }
    return Array.from(components);
}

const arr = ['apple', 'apple', 'pear', 'pie'];
const str = 'applepearpie';
console.log(stringSegmentation(arr, str));

// OUTPUT
//[ 'apple', 'pear', 'pie' ]
