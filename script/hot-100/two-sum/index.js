/**
 * 俩数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 解法一
var twoSum2 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(target - nums[i]) >= 0 && nums.indexOf(target - nums[i]) !== i) {
            return [i, nums.indexOf(target - nums[i])]
        }
    }
};

// 解法二(暴力解法)
var twoSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                return [i, j]
            }
        }
    }
};

// 解法三(hashmap)
var twoSum = function(nums, target) {
    const hashmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(target - nums[i])) {
            return [hashmap.get(target - nums[i]), i];
        }
        hashmap.set(nums[i], i);
    }

    return null;
};