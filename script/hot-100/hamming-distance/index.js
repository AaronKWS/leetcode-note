/**
 * 汉明距离
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 解法一(Brian Kernighan算法)
var hammingDistance = function(x, y) {
    let result = x ^ y;
    let count = 0;

    while (result) {
        result &= (result - 1);
        count++;
    }

    return count
};

// 解法二(位移)
var hammingDistance = function(x, y) {
    let result = x ^ y;
    let count = 0;

    while (result) {
        count += result & 1;
        result = result >> 1;
    }

    return count
};