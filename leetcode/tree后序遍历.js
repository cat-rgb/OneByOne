/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 var postorderTraversal = function(root) {
    const res = []
    function postOrder(root) {
       if(!root) return
       postOrder(root.left)
       postOrder(root.right)
       res.push(root.val)
    }
 
    postOrder(root)
 
    return res
 };

// 迭代
 var postorderTraversal = function(root) {
    const res = []
    const cur = []
    if(root) cur.push(root)
    while(cur.length) {
       const top = cur.pop()
       res.unshift(top.val)
       if(top.left) cur.push(top.left)
       if(top.right) cur.push(top.right)
    }
 
    return res
 };
 // @lc code=end
 
 