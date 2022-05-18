/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */

// 解法一(双指针)
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    let maxLen = 1;
    let lp = 0;
    let rp = 0;

    if (len <= 1) {
        return len;
    }

    for (let i = 1; i < len; i++) {
        const index = s.slice(lp, rp + 1).indexOf(s[i]);

        if (index === -1) {
            rp = i;

            const sublen = rp - lp + 1;

            if (sublen > maxLen) {
                maxLen = sublen;
            }
        } else {
            lp += (index + 1);
            rp = i;
        }
    }

    return maxLen;
};

// 解法二（滑动窗口）
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    const len = s.length;
    let maxLen = 0;
    let rp = 0;

    for (let i = 0; i < len; i++) {
        if (i) {
            set.delete(s[i - 1]);
        }

        // 也可以通过s.charAt(下标获取，但是效率没有直接获取高)
        while (rp < len && !set.has(s[rp])) {
            set.add(s[rp]);

            rp++;
        }

        const subMax = rp - i;

        if (subMax > maxLen) {
            maxLen = subMax
        }
    }

    return maxLen;
};