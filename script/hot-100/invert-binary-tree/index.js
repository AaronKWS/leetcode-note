/**
 * 翻转列表
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 解法一
var invertTree = function(root) {
    const arr = [root];

    while (arr.length) {
        const ele = arr.pop();

        if (!ele.left && !ele.right) continue;

        const left = ele.left;
        const right = ele.right;

        ele.left = right;
        ele.right = left;

        if (left) {
            arr.push(left);
        }

        if (right) {
            arr.push(right);
        }
    }

    return root;
};

// 解法二（递归）
var invertTree = function(root) {
    if (!root || (!root.left && !root.right)) {
        return root;
    }

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}