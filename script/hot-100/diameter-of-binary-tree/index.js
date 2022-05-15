/**
 * 二叉树的直径
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {number}
 */

// 解法一(深度优先遍历)
var diameterOfBinaryTree = function(root) {
    let ans = 1;

    function depth(root, ans) {
        if (!root) {
            return 0;
        }

        const leftDepth = diameterOfBinaryTree(root.left, ans);
        const rightDepth = diameterOfBinaryTree(root.right, ans);

        ans = Math.max(ans, leftDepth + rightDepth);

        return 1 + Math.max(leftDepth, rightDepth);
    }

    depth(root, ans);

    return ans;
};