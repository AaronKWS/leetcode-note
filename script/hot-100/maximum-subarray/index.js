/**
 * 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */

// 解法一（暴力解法，超时）
var maxSubArray1 = function(nums) {
    let max = Number.MIN_VALUE;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum > max) {
                max = sum;
            }
        }
    }

    return max;
};

/**
 * 解法二（动态规划）
 * @param {number[]} nums
 * 思路分析：
 * 整体分析，我们要求的是最大子数组的和，所以说我们可以试着将这一个大问题分解
 * 例如，示例 1 输入数组是 [-2,1,-3,4,-1,2,1,-5,4]
 * 假设1：说上面的数组只有一个元素：[-2]
 * 那么最大和肯定就是-2
 * 假设：2数组有俩项：[-2, 1]
 * 那么我们改怎么计算出最大连续子数组和呢，我们可以先分析，先假如有一项那么最大就是-2，所以在有俩项的情
 * 况下，基于最后一项前面最大值为-2的前提下，就是比较-2 + 1, 1哪个大，然后其中大的和当前存储的最大值-2比较。得出为1
 * 假设3：数组有三项：[-2, 1, -3]；
 * 那么是不是我们可以基于假设2的出来的结果依旧是基于最大值1的前提下，比较1-3、-3哪个大，然后最大的和1比较，得出最大值还为1
 * .....
 * 看到这里相信大家已经看出了规律，这些细小的问题一步步的推理，最终我们得出最终答案
 */
var maxSubArray2 = function(nums) {
    // 如果只有一项，下面的循环就没必要了
    let max = nums[0];
    // 来存储上一次的最大值
    let pre = 0;

    for (let i = 1; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);

        max = Math.max(max, pre);
    }

    return max;
};

/**
 * 解法三(动态规划)
 * 思路: https://leetcode-cn.com/problems/maximum-subarray/solution/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/
 */
var maxSubArray3 = function(nums) {
    // 如果只有一项，下面的循环仍然就没必要了
    let max = nums[0];
    // 来存储以每个元素结尾的连续数组集合中的最大值
    let dp = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        // 大于零且如果以nums[i]元素结尾，那么相加一定最大
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
        } else {
            dp[i] = nums[i];
        }
    }

    for (let i = 1; i < dp.length; i++) {
        max = Math.max(max, dp[i]);
    }

    return max;
};

/**
 * 解法四（分治算法）
 * 对于一个区间 [l,r]，我们可以维护四个量：
 * lSum 表示 [l,r] 内以 l 为左端点的最大子段和
 * rSum 表示 [l,r] 内以 r 为右端点的最大子段和
 * mSum 表示 [l,r] 内的最大子段和
 * iSum 表示 [l,r] 的区间和
 * 思路: https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/
 */
// 首先定义一个构造函数来存储四个变量
function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

function compare(l, r) {
    let iSum = l.iSum + r.iSum;
    let lSum = Math.max(l.lSum, l.iSum + r.lSum);
    let rSum = Math.max(r.rSum, r.iSum + l.rSum);
    let mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);

    return new Status(lSum, rSum, mSum, iSum);
}

function getMax(nums, l, r) {
    if (l === r) {
        return new Status(nums[l], nums[l], nums[l], nums[l]);
    }

    let m = (l + r) >> 1;
    let lSub = getMax(nums, l, m);
    let rSub = getMax(nums, m + 1, r);

    return compare(lSub, rSub);
}

var maxSubArray4 = function(nums) {
    return getMax(nums, 0, nums.length - 1).mSum;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray2(nums))