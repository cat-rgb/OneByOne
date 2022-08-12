/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return []
    const res = []
    const cur = [root]
    while(cur.length) {
        const len = cur.length
        const level = []
        for(let i = 0;i< len;i++) {
            const top = cur.shift()
            if(top.left) cur.push(top.left)
            if(top.right) cur.push(top.right)
            level.push(top.val)
        }
        res.push(level)
    }
    return res
};
// @lc code=end

