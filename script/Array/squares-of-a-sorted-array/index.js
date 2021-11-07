/**
 * 有序数组的平方
 */

/**
 * 方式一 暴力求解
 * 时间复杂度 O(n + nlogn) 或 O(n^3)（基于v8引擎）
 * @param {number[]} nums 数组
 * @return {number[]} 返回符合题目的数组
 */
function sortedSquares(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i]
    }

    // 可能使用快排，可能是插入排序，也可能是混合
    nums.sort((a, b) => a - b);

    return nums;
};

// test
let nums = [-4, -1, 0, 3, 10];

console.log('方法一：', sortedSquares(nums));

/**
 * 方式二 双指针
 * 时间复杂度 O(n)
 * @param {number[]} nums 数组
 * @return {number[]} 返回符合题目的数组
 */
function sortedSquaresVer2(nums) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let newNums = [];
    let currentIndex = nums.length - 1;

    while (leftIndex <= rightIndex && currentIndex >= 0) {
        if (Math.pow(nums[leftIndex], 2) > Math.pow(nums[rightIndex], 2)) {
            newNums[currentIndex--] = Math.pow(nums[leftIndex++], 2);
        } else {
            newNums[currentIndex--] = Math.pow(nums[rightIndex--], 2);
        }
    }

    return newNums;
};

console.log('方法二：', sortedSquares(nums));