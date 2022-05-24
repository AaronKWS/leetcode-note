/**
 * 删除链表的倒数第 N 个结点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 解法一
var removeNthFromEnd = function (head, n) {
    const arr = [];
    const p = head;

    while (p) {
        arr.push(p);

        p = p.next;
    }

    const len = arr.length;

    if (n > len) {
        return p;
    }

    if (!(len - n)) {
        head = arr[0].next;
    } else {
        arr[len - n - 1].next = arr[len - n].next;
    }

    return p;
};
