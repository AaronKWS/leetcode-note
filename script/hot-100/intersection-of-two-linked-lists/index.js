/**
 * 相交链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 解法一（hash交集）
var getIntersectionNode = function(headA, headB) {
    const arrA = new Set();
    const arrB = new Set();

    while (headA) {
        arrA.add(headA);
        headA = headA.next;
    }

    while (headB) {
        arrB.add(headB);
        headB = headB.next;
    }

    return [...new Set([...arrA].filter(item => arrB.has(item)))][0];
};

// 解法二（hash优化）
var getIntersectionNode2 = function(headA, headB) {
    const set = new Set();

    while (headA) {
        arrA.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (set.has(headB)) {
            return headB;
        }

        headB = headB.next;
    }

    return null;
};

// 解法三（双指针）
var getIntersectionNode3 = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    let pA = headA,
        pB = headB;

    while (pA !== pB) {
        if (pA === null) {
            pA = headB;
        } else {
            pA = pA.next;
        }

        if (pB === null) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }

    return pA;
};