/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */

// 解法一(动态规划递归, 超时)
var climbStairs1 = function(n) {
    if (n <= 3) {
        return n;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
};

// 解法二(递归缓存优化)
const map = new Map();

var climbStairs2 = function(n) {
    if (map.has(n)) {
        return map.get(n);
    }

    if (n <= 3) {
        return n;
    }

    const sum = climbStairs(n - 2) + climbStairs(n - 1);

    map.set(n, sum);

    return sum;
};

// 解法三(直接遍历)
var climbStairs3 = function(n) {
    if (n <= 3) {
        return n;
    }

    let a = 1,
        b = 2;
    let result;

    while (n > 2) {
        result = a + b;
        a = b;
        b = result;

        n--;
    }

    return result;
};