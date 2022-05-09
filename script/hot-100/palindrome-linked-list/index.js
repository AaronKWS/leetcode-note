/**
 * 回文链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {boolean}
 */


// 解法一(递归)
var isPalindrome = function(head) {
    let frontPointor = head;

    function check(link) {
        if (link) {
            if (!check(link.next)) {
                return false;
            }

            if (frontPointor.val !== link.val) {
                return false;
            }

            frontPointor = frontPointor.next;
        }

        return true;
    }

    return check(head);
};

// 解法二(数组)
var isPalindrome = function(head) {
    const arr = [];

    while (head) {
        arr.push(head);
        head = head.next;
    }

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }

    return true;
};

// 解法三(双指针)
var isPalindrome = function(head) {
    let slow = head,
        fast = head;
    let pre, prepre = null;

    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
        pre.next = prepre;
        prepre = pre;
    }

    if (fast) {
        slow = slow.next;
    }

    while (pre && slow) {
        if (pre.val !== slow.val) {
            return false;
        }

        pre = pre.next;
        slow = slow.next;
    }

    return true;
};

// 解法四(栈)
var isPalindrome = function(head) {
    const stack = [];
    let pointor = head;
    let len = 0,
        current = 0;

    while (pointor && pointor.next) {
        len++;

        pointor = pointor.next.next;
    }

    while (head) {
        if (current < len) {
            stack.push(head.val);
        } else if (current === len) {
            if (!pointor) {
                if (stack[stack.length - 1] === head.val) {
                    stack.pop();
                }
            }
        } else {
            if (stack[stack.length - 1] === head.val) {
                stack.pop();
            }
        }

        current++;
        head = head.next;
    }

    return !stack.length;
};