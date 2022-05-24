/**
 * 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */

// 解法一（dfs深度优先遍历）
var letterCombinations = function(digits) {
    const len = digits.length;
    const res = [];
    const digitsMap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    if (!len) {
        return res;
    }

    function dfs(str, index) {
        if (index > len - 1) {
            return res.push(str);
        }

        const numstr = digitsMap[digits[index]];

        for (let i = 0; i < numstr.length; i++) {
            dfs(str + numstr[i], index + 1);
        }
    }

    dfs("", 0);

    return res;
};

// 解法二（bfs广度优先遍历）
var letterCombinations = function(digits) {
    const len = digits.length;
    const queue = [];
    const digitsMap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    if (!len) {
        return queue;
    }

    queue.push("");

    for (let i = 0; i < len; i++) {
        const queueLen = queue.length;

        for (let j = 0; j < queueLen; j++) {
            const item = queue.shift();
            const numstr = digitsMap[digits[i]];

            for (let l of numstr) {
                queue.push(item + l);
            }
        }
    }

    return queue;
};