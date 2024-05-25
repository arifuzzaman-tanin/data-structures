function LengthOfLongestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }

    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
        let visited = {}
        let tempMaxLength = 0;
        for (let a = i; a < str.length; a++) {
            if (!visited[str[a]]) {
                visited[str[a]] = true;
                tempMaxLength++;
            }
            else {
                break;
            }
        }

        if (maxLength < tempMaxLength) {
            maxLength = tempMaxLength;
        }
    }
    return maxLength
}

const s = "abcabcbb";
//const s = "bbbbb";
//const s = "pwwkew";
console.log(LengthOfLongestSubstring(s))

// OUTPUT
// 3
