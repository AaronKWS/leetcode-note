/**
 * 合并二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// 解法一(递归，深度优先遍历)
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};

// 解法二(广度优先遍历)
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    const root = new TreeNode(root1.val + root2.val);
    const stack = [
        [root1, root2, root]
    ];

    while (stack.length) {
        const [node1, node2, rootNode] = stack.pop();
        const { left: left1, right: right1 } = node1;
        const { left: left2, right: right2 } = node2;

        if (left1 || left2) {
            if (left1 && left2) {
                rootNode.left = new TreeNode(left1.val + left2.val);
                stack.push([left1, left2, rootNode.left]);
            } else {
                rootNode.left = left1 || left2;
            }
        }

        if (right1 || right2) {
            if (right1 && right2) {
                rootNode.right = new TreeNode(right1.val + right2.val);
                stack.push([right1, right2, rootNode.right]);
            } else {
                rootNode.right = right1 || right2;
            }
        }
    }

    return root;
};