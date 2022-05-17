/**
 * 俩数相加
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 解法一
var addTwoNumbers = function(l1, l2) {
    let carryBit = 0;
    let lp1 = l1,
        lp2 = l2;
    let lp11;

    while (lp1 && lp2) {
        let sum = lp1.val + lp2.val + carryBit;
        let currentBit = sum % 10;

        lp1.val = currentBit;

        carryBit = sum >= 10 ? 1 : 0;

        lp11 = lp1;
        lp1 = lp1.next;
        lp2 = lp2.next;
    }

    let lp = lp1 || lp2;

    if (!lp) {
        if (carryBit) {
            lp11.next = new ListNode(1, null);
        }

        return l1;
    }

    let lpp = lp;
    let lppb;

    while (carryBit && lpp) {
        let sum = lpp.val + carryBit;
        let currentBit = sum % 10;

        lpp.val = currentBit;

        carryBit = sum >= 10 ? 1 : 0;

        lppb = lpp;
        lpp = lpp.next;
    }

    if (!lpp && carryBit) {
        lppb.next = new ListNode(1, null);
    }

    lp11.next = lp;

    return l1;
};

// 解法二
// 上面的解法没有问题，但是后续的操作明显很啰嗦，第一次循环就是以俩个链表中最短链表结束后退出，然后处理后续，其实如果链表没有可以填0
var addTwoNumbers = function(l1, l2) {
    let head, tail;
    let carryBit = 0;

    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;

        const sum = n1 + n2 + carryBit;

        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }

        carryBit = Math.floor(sum / 10);

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (carryBit) {
        tail.next = new ListNode(1, null);
    }

    return head;
};