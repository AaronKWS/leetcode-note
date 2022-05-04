/**
 * 多数元素
 * @param {number[]} nums
 * @return {number}
 */

// 解法一（排序）
var majorityElement = function(nums) {
    nums.sort((a, b) => (a - b));

    return nums[nums.length >> 1];
};

// 解法二(hash)
var majorityElement2 = function(nums) {
    const hash = new Map();
    let maxNumber = 0;
    let maxNums = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1);
        } else {
            hash.set(nums[i], 1);
        }
    }

    for (let [key, value] of hash.entries()) {
        if (value > maxNumber) {
            maxNumber = value;
            maxNums = key;
        }
    }

    return maxNums;
};

// 解法三(随机数)
function check(nums, num, len) {
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] === num) {
            count++;
        }
    }

    return count;
}

var majorityElement3 = function(nums) {
    const len = nums.length;
    const middle = len >> 1;

    while (true) {
        const num = nums[Math.floor(Math.random() * len)];

        if (check(nums, num, len) > middle) {
            return num;
        }
    }
};

// 解法四(摩尔投票法)
var majorityElement4 = function(nums) {
    let maximum;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!count) {
            maximum = nums[i];
        }

        if (maximum === nums[i]) {
            count++
        } else {
            count--;
        }
    }

    return maximum;
};