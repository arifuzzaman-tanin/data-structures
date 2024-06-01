function isAnagram(s, t) {
    if (s.length != t.length && s.length !== 0 && t.length != 0) {
        return false;
    }

    const sComponents = {};
    const tComponents = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in sComponents) {
            sComponents[s[i]] += 1;
        }
        else {
            sComponents[s[i]] = 1;
        }

        if (t[i] in tComponents) {
            tComponents[t[i]] += 1;
        }
        else {
            tComponents[t[i]] = 1;
        }
    }

    for (let key in sComponents) {
        if (sComponents[key] != tComponents[key]) {
            return false;
        }
    }

    return true;
}

const s = "a", t = "ab";
console.log(isAnagram(s, t));