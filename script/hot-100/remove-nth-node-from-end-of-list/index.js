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

// 解法一(数组存储)
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    const arr = [];
    let p = dummy;

    while (p) {
        arr.push(p);

        p = p.next;
    }

    const pre = arr.length - n - 1;

    arr[pre].next = arr[pre].next.next;

    return dummy.next;
};

// 解法二（先计算链表长度）
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    const len = (function (head) {
        let len = 0;

        while (head) {
            len++;

            head = head.next;
        }

        return len;
    })(head);
    let p = dummy;

    for (let i = 0; i < len - n; i++) {
        p = p.next;
    }

    p.next = p.next.next;

    return dummy.next;
};

// 解法三（栈）
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    const stack = [];
    let p = dummy;

    while (p) {
        stack.push(p);
        p = p.next;
    }

    while (n--) {
        stack.pop();
    }
    const pre = stack.pop();

    pre.next = pre.next.next;

    return dummy.next;
};

// 解法四（双指针）
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    let first = head,
        second = dummy;

    while (n--) {
        first = first.next;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
};
