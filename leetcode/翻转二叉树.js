/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) return
    const right = root.right
    const left = root.left
    root.left = right
    root.right = left
    if(root.right) invertTree(root.right)
    if(root.left) invertTree(root.left)
    return root
};

// 迭代
var invertTree = function(root) {
    if(!root) return root
    const queue = [root]
    while(queue.length) {
        const len = queue.length
        for(let i = 0; i< len;i++) {
            const top = queue[0]
            const right = top.right
            const left = top.left
            top.left = right
            top.right = left
    
            if(right) queue.push(top.left)
            if(left) queue.push(top.right)
            queue.shift()
        }
    }
    return root
};
// @lc code=end

