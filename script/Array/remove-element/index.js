/**
 * 移除元素
 */

/**
 * 方法一： 暴力求解
 * 时间复杂度： O(n^2)
 * @param {number[]} nums 数组
 * @param {number} val 删除值
 * @return {number} 删除后数组长度
 */
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            for (let j = i; j + 1 < nums.length; j++) {
                nums[j] = nums[j + 1];
            }

            i--;
            nums.pop();
        }
    }

    return nums.length;
};

// test
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
    val = 2;

console.log('方法一：', removeElement(nums, val));

/**
 * 方法二： 双指针方式
 * 时间复杂度： O(n)
 * @param {number[]} nums 数组
 * @param {number} val 删除值
 * @return {number} 删除后数组长度
 */
function removeElementVer2(nums, val) {
    let slowIndex = 0;

    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[slowIndex];
        }
    }

    return slowIndex;
};

console.log('方法二：', removeElementVer2(nums, val));

/**
 * 方法三: 使用filter
 * 时间复杂度： O(n)
 * 力扣无法通过，因为没有改变原数组，其实实现方式有很多😊
 * @param {number[]} nums 数组
 * @param {number} val 删除值
 * @return {number} 删除后数组长度
 */
function removeElementVer3(nums, val) {
    return nums.filter(item => item !== val).length;
};

console.log('方法三：', removeElementVer3(nums, val));