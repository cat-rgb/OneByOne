/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// 层序遍历获取深度
 var maxDepth = function(root) {
    if(!root) return 0
    let target = 0
    const cur = [root]
    while(cur.length) {
        target++
        let len = cur.length
        while(len) {
            const top = cur.shift()
            if(top.left) cur.push(top.left)
            if(top.right) cur.push(top.right)
            len--
        }
    }
    return target

};

// 深度优先遍历 获取
var maxDepth = function(root) {
    if(!root) return 0
    
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return Math.max(left, right) + 1
};
// @lc code=end

