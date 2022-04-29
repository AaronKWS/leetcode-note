/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */

// 解法一（暴力求解-超时）
var maxProfit = function(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }

    return maxProfit;
};

// 解法二(贪心算法)
// 思路：寻找第i天之前的最小价格
var maxProfit2 = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (minPrice > prices[i - 1]) {
            minPrice = prices[i - 1];
        }

        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

// 解法三（动态规划）
// 解题思路：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-wen-ti-by-chen-wei-f-uye0/
var maxProfit3 = function(prices) {
    const day = prices.length;
    const dp = Array.from(new Array(day), () => ([0, 0]));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let i = 1; i < length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }

    return dp[i - 1][0];
};