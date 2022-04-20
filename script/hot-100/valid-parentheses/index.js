/**
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const stack = [];
    const arr = s.split('');
    const map = {
        "(": ")",
        "[": ']',
        "{": '}'
    }

    for (let i = 0; i < arr.length; i++) {
        if (['(', '{', '['].includes(arr[i])) {
            stack.push(arr[i]);
        } else {
            if (map[stack.pop()] !== arr[i]) {
                return false;
            }
        }
    }

    return !stack.length;
};

let s = "()[]{}";

console.log(isValid(s));