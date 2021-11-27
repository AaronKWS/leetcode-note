# 203. 移除链表元素
### 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
leetcode 203题[>>>点这里查看](https://leetcode-cn.com/problems/remove-linked-list-elements/)
**示例：**
> **输入**: head = [1,2,6,3,4,5,6], val = 6           
> **输出**: [1,2,3,4,5]            

**示例 2:**
> **输入**: head = [], val = 1       
> **输出**: []       

**提示：**
1. 列表中的节点数目在范围 [0, 104] 内
2. 1 <= Node.val <= 50
3. 0 <= val <= 50