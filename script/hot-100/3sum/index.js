/**
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */

// 解法一(不知是否正确，栈溢出)
var threeSum = function(nums) {
    let len = nums.length;
    const res = [];

    if (len < 3) {
        return res;
    }

    nums.sort((a, b) => (a - b));

    for (let i = 0; i < len; i++) {
        const map = new Map();
        for (let j = i + 1; j < len; j++) {
            if (map.has(-nums[i] - nums[j])) {
                res.push([nums[i], -nums[i] - nums[j], nums[j]].toString())
            }

            map.set(nums[j], j);
        }
    }

    return [...new Set(res)].map(item => item.split(',').map(item => parseInt(item)));
};

// 解法二（双指针）
var threeSum = function(nums) {
    let len = nums.length;
    const res = [];

    if (len < 3) {
        return res;
    }

    nums.sort((a, b) => (a - b));

    for (let f = 0; f < len; f++) {
        if (f > 0 && nums[f] === nums[f - 1]) continue;

        let t = len - 1;
        const target = -nums[f];

        for (let s = f + 1; s < len; s++) {
            if (s > f + 1 && nums[s] === nums[s - 1]) continue;

            // 如果nums[t] 加上目前最小的nums[s]是一个大于target的情况的话
            // nums[s]再继续增加依然大于target，而不会出现等于target
            // 因此只有nums[t]加nums[s]小于target，再继续增加s，才有机会使等式成立
            while (t > s && nums[s] + nums[t] > target) {
                t--;
            }

            // 当俩者相遇说明nums[s] + nums[t]依然大于target
            // 再继续增大s只会更加大于target，而不会出现等于target，因此不需要继续循环第二层
            if (t === s) {
                break;
            }

            if (nums[s] + nums[t] === target) {
                res.push([nums[f], nums[s], nums[t]]);
            }
        }
    }

    return res;
};