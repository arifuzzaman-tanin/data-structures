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

const arr = ['apple', 'apple', 'pear', 'pie'];
const str = 'applepie';
console.log(stringSegmentation(arr, str)); 

// OUTPUT
// [ 'apple', 'pie' ]
