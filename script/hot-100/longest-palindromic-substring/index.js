/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */

// 解法一(暴力解法)
function checkString(s) {
    const len = s.length;

    for (let i = 0, j = len - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }

    return true;
}

var longestPalindrome = function(s) {
    const len = s.length;
    let maxPS = "";

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (s[i] === s[j]) {
                const subString = s.slice(i, j + 1);

                if (checkString(subString) && maxPS.length < subString.length) {
                    maxPS = subString;
                }
            }
        }
    }

    return maxPS;
};

// 解法二（动态规划）
var longestPalindrome = function(s) {
    const len = s.length;

    if (len < 2) {
        return s;
    }

    let maxLen = 1,
        left = 0;
    const dp = Array.from(new Array(len), () => new Array(len).fill(false));

    // 长度为1的数组都为回文字符串
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    for (let l = 2; l <= len; l++) {
        for (let i = 0; i < len; i++) {
            let j = l + i - 1;

            if (j >= len) {
                break;
            }

            if (s[i] === s[j]) {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                left = i;
            }
        }
    }

    return s.slice(left, left + maxLen);
};

// 解法三（中心扩展）
function getMaxPS(s, left, right) {
    const len = s.length;

    while (left >= 0 && right < len && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

var longestPalindrome = function(s) {
    const len = s.length;

    if (len < 1) {
        return s;
    }

    let right = 0,
        left = 0;

    for (let i = 0; i < len; i++) {
        const len1 = getMaxPS(s, i, i);
        const len2 = getMaxPS(s, i, i + 1);
        const maxLen = Math.max(len1, len2);

        if (maxLen > right - left + 1) {
            right = i + (maxLen >> 1);
            left = i - ((maxLen - 1) >> 1);
        }
    }

    return s.slice(left, right + 1);
};