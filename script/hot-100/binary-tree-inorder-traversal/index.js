/**
 * 二叉树的中序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {number[]}
 */

// 解法一(递归)
var inorderTraversal = function(root, arr = []) {
    if (root == null) {
        return;
    }

    inorderTraversal(root.left, arr);

    arr.push(root.val);

    inorderTraversal(root.right, arr);

    return arr;
};

// 解法二(循环遍历)
var inorderTraversal2 = function(root) {
    let pointer = root;
    let arr = [];
    let stack = [];

    while (pointer !== null || stack.length) {
        if (pointer !== null) {
            stack.push(pointer)

            pointer = pointer.left;
        } else {
            pointer = stack.pop();
            arr.push(pointer.val);
            pointer = pointer.right;
        }
    }

    return arr;
};

// 解法三(循环遍历-更优)
var inorderTraversal2 = function(root) {
    const arr = [];
    const stack = [];

    while (root || stack.length) {
        while (root) {
            stack.push(root);

            root = root.left;
        }

        root = stack.pop();

        arr.push(root.val);

        root = root.right;
    }

    return arr;
};