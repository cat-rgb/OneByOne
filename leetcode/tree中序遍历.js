/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 递归
 var inorderTraversal = function(root) {
    const res = []
    function inOrder(root) {
        if(!root) return
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    inOrder(root)
    return res
};

// 迭代
var inorderTraversal = function(root) {
    const res = []
    const cur = []
    if(root) cur.push(root)
    while(cur.length) {
        // let root = cur[cur.length - 1]
        while(root) {
            root = root.left
            if(root) cur.push(root)
        }
        const top = cur.pop()
        res.push(top.val)
        if(top.right) cur.push(top.right)
        root = top.right
    }
    return res
};
// @lc code=end

