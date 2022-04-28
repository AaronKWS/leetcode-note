/**
 *  二叉树的最大深度
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
var maxDepth = function(root) {
    if (root === null) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// 解法二(广度优先遍历)
var maxDepth2 = function(root) {
    // if (root === null) return 0;

    // const queue = [root];
    // let depth = 0;

    // while (queue.length) {
    //     while (queue.length--) {
    //         const childTree = queue.shift();

    //         childTree.left && queue.push(childTree.left);

    //         childTree.right && queue.push(childTree.right);
    //     }

    //     depth++;
    // }

    // return depth;

    if (!root) return 0;

    // 配合栈为了性能更优
    let stack = [root];
    let depth = 0;

    while (stack.length) {
        let length = stack.length;
        let queueC = [];

        while (length--) {
            const childTree = stack.pop();

            childTree.left && queueC.push(childTree.left);

            childTree.right && queueC.push(childTree.right);
        }

        stack = queueC;

        depth++;
    }

    return depth;
};

// 解法三(递归先序遍历)
var maxDepth3 = function(root) {
    let depthPointor = 0;
    let maxDepth = 0;

    const depth = (r) => {
        if (!r) return;

        depthPointor++;

        maxDepth = Math.max(maxDepth, depthPointor);
        depth(r.left);
        // 中
        // maxDepth = Math.max(maxDepth, depthPointor);
        depth(r.right);
        // 后
        // maxDepth = Math.max(maxDepth, depthPointor);

        depthPointor--;
    }

    depth(root);

    return maxDepth
};