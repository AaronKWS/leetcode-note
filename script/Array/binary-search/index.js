/**
 * 二分查找
 * 二分查找的重要条件为： 数据结构为数组，且为有序数组
 */

// 左闭 右闭[left, rigth]
function searchVer1(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = (left + right) >> 1;

        if (arr[middle] > target) {
            right = middle - 1;
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            return middle
        }
    }

    // 未找到
    return -1;
}

// test
let nums = [-1, 0, 3, 5, 9, 12],
    target = 12

console.log('[left, right]: ', searchVer1(nums, target)); // 4

// 左闭 右开[left, right)
function searchVer2(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const middle = (left + right) >> 1;

        if (target > arr[middle]) {
            left = middle + 1;
        } else if (target < arr[middle]) {
            right = middle;
        } else {
            return middle
        }
    }

    return -1;
}

// test
console.log('[left, right): ', searchVer2(nums, target)); // 4