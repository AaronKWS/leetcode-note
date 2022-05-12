/**
 * 找到所有数组中消失的数字
 * @param {number[]} nums
 * @return {number[]}
 */

// 原地哈希
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const arr = [];

    for (let num of nums) {
        const x = (num - 1) % n;

        nums[x] = nums[x] + n;
    }

    for (let [i, num] of nums.entries()) {
        if (num <= n) {
            arr.push(i + 1);
        }
    }

    return arr;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);