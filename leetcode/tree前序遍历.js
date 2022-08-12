/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归实现
 var preorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const cur = [root]
    while(cur.length) {
        const top = cur.pop()
        res.push(top.val)
        if(top.right) cur.push(top.right)
        if(top.left) cur.push(top.left)
    }
    
    return res
};

// 迭代实现
var preorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const cur = [root]
    while(cur.length) {
        const top = cur.pop()
        res.push(top.val)
        if(top.right) cur.push(top.right)
        if(top.left) cur.push(top.left)
    }
    
    return res
};
// @lc code=end

