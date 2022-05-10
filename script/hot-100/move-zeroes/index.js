/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 解法一（冒泡）
var moveZeroes = function(nums) {
    let zc;

    for (let i = 0; i < nums.length - 1; i++) {
        if (!nums[i]) {
            let index = i;

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j]) {
                    zc = nums[j];
                    nums[j] = nums[index];
                    nums[index] = zc;
                    index = j;
                }
            }
        }
    }
};

// 解法二(双指针)
var moveZeroes = function(nums) {
    const len = nums.length;
    let left = 0,
        right = 0;

    while (right < len) {
        if (nums[right] && !nums[left]) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }

        right++;
    }
};

// 解法三(sort)
// Array.prototype.sort.call([xxx], compareFunction);
// compareFunction(a, b) 返回负数a在b前；返回0ab位置不变；返回正数b在a前
var moveZeroes = function(nums) {
    nums.sort((a, b) => (b ? 0 : -1));
};