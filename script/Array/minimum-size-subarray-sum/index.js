/**
 * 长度最小的子数组
 */

// test
const target = 15;
const nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]

console.log('nums: ', nums);

/**
 * 暴力求解
 * 时间复杂度O(n^2)
 * @param {number} target
 * @param {number[]} nums
 * @return {number} 子数组长度
 */
var minSubArrayLen = function(target, nums) {
    let minLen = 0;

    for (i = 0; i < nums.length; i++) {
        let sum = 0;

        for (j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum >= target) {
                if (minLen > j - i + 1 || minLen === 0) {
                    minLen = j - i + 1;
                }

                break;
            }
        }
    }

    return minLen;
};

console.log('方式一：', minSubArrayLen(target, nums));

/**
 * 双指针方式
 * 时间复杂度O(n)
 * @param {number} target
 * @param {number[]} nums
 * @return {number} 子数组长度
 */
var minSubArrayLenV2 = function(target, nums) {
    let leftIndex = 0;
    let sum = 0;
    let minLen = 0;

    for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
        sum += nums[rightIndex];

        while (sum >= target) {
            let len = rightIndex - leftIndex + 1;
            minLen = (len < minLen || minLen === 0) ? len : minLen;
            sum -= nums[leftIndex++];
        }
    }

    return minLen;
};

console.log('方式二：', minSubArrayLenV2(target, nums));