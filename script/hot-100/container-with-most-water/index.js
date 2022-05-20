/**
 * 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */

// 解法一(暴力求解, 超时)
var maxArea = function(height) {
    const len = height.length;
    let maxVolume = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const volume = (j - i) * Math.min(height[i], height[j]);

            if (volume > maxVolume) {
                maxVolume = volume;
            }
        }
    }

    return maxVolume;
};

// 解法二(双指针)
var maxArea = function(height) {
    let maxVolume = 0;
    let left = 0,
        rigth = height.length - 1;

    while (left < right) {
        let volumn = (right - left) * Math.min(height[left], height[rigth]);

        if (volumn > maxVolume) {
            maxVolume = volumn;
        }

        if (height[left] < height[rigth]) {
            left++;
        } else {
            right++;
        }
    }

    return maxVolume;
};