/**
 * 合并两个有序链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 解法一(递归)
var mergeTwoLists1 = function(list1, list2) {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val > list2.val) {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    } else {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
};

// 解法二(迭代)
var mergeTwoLists = function(list1, list2) {
    const newList = new ListNode(-1, null);
    let newListPointer = newList;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            newListPointer.next = list1;

            list1 = list1.next;
        } else {
            newListPointer.next = list2;

            list2 = list2.next;
        }

        newListPointer = newListPointer.next;
    }

    newListPointer.next = list1 === null ? list2 : list1;

    return newList.next;
};