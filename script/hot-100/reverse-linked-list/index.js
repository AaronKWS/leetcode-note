/**
 * 反转链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 解法一(迭代)
var reverseList1 = function(head) {
    let pre = null;

    while (head) {
        const nextEle = head.next;
        head.next = pre;
        pre = head;
        head = nextEle;
    }

    return pre;
};

// 解法二(递归)
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};

// 解法三（直接反转值）
var reverseList = function(head) {
    let res = null;

    for (let i = head; i !== null; i = i.next) {
        res = new ListNode(i.val, res);
    }

    return res;
};