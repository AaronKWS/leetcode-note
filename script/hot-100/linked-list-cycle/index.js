/**
 * 环形链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} head
 * @return {boolean}
 */

// 解法一(hash表)
var hasCycle = function(head) {
    const map = new Map();

    while (head !== null) {
        if (map.has(head.next)) {
            return true;
        }

        map.set(head, null);

        head = head.next;
    }

    return false;
};

// 解法二（已知JSON.stringify循环引用报错）
var hasCycle2 = function(head) {
    try {
        JSON.stringify(head);

        return false;
    } catch (error) {
        return true;
    }
};

// 解法三（标记法）
var hasCycle3 = function(head) {
    while (head) {
        if (head.tag) {
            return true;
        }

        head.tag = true;

        head = head.next;
    }

    return false;
};

// 解法四（快慢指针法）
var hasCycle4 = function(head) {
    let slow, fast = slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};