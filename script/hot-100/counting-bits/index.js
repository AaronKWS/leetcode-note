/**
 * 比特位计数
 * @param {number} n
 * @return {number[]}
 */

// 解法一
var countBits = function(n) {
    let arr = [0];

    for (let i = 1; i <= n; i++) {
        const bits = i.toString(2);

        arr.push(bits.match(/1/g).length);
    }

    return arr;
};


// 解法二(Brian Kernighan 算法)
// 对于任意整数 x，令 x=x&(x-1)，该运算将 x 的二进制表示的最后一个 1 变成 0
function countOnes(x) {
    let count = 0;

    while (x > 0) {
        x = x & (x - 1);

        count++;
    }

    return count;
}
var countBits = function(n) {
    let arr = [0];

    for (let i = 1; i <= n; i++) {
        arr.push(countOnes(i));
    }

    return arr;
};


// 解法三(动态规划--最高有效位)
var countBits = function(n) {
    let arr = [0];
    let hightBits = 0;

    for (let i = 1; i <= n; i++) {
        if (!(i & (i - 1))) {
            hightBits = i;
        }

        arr.push(arr[i - hightBits] + 1);
    }

    return arr;

    return arr;
};

// 解法四（动态规划--最低有效位）
var countBits = function(n) {
    let arr = [0];

    for (let i = 1; i <= n; i++) {
        arr.push(arr[i >> 1] + (i & 1));
    }

    return arr;
};

// 解法五（动态规划--最低设置位）
var countBits = function(n) {
    let arr = [0];

    for (let i = 1; i <= n; i++) {
        arr.push(arr[i & (i - 1)] + 1);
    }

    return arr;
};