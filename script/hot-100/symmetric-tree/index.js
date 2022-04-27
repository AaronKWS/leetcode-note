/**
 * 对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {boolean}
 */
// 解法一(递归)
function check(a, b) {
    if (a === null && b === null) {
        return true;
    }

    if (a == null || b == null) {
        return false;
    }

    return a.val === b.val && check(a.left, b.right) && check(a.right, b.left);
}

var isSymmetric = function(root) {
    return check(root, root);
};


// 解法二（迭代）
function check2(a, b) {
    // 栈和队列都可以，使用栈的性能更高，因为队列前面出去后，后面的要统一前移
    const stack = [];

    stack.push(a, b);

    while (stack.length) {
        a = stack.pop();
        b = stack.pop();

        if (!a && !b) { continue; }
        if ((!a || !b) || a.val !== b.val) { return false; }

        stack.push(a.left, b.right, a.right, b.left);
    }

    return true;
}

var isSymmetric2 = function(root) {
    return check2(root, root);
};