/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 递归 dfs
 var isSymmetric = function(root) {
    const compare = function(a, b) {
        if(a ==null && b ==null) return true
        if(a ==null && b != null) return false
        if(a !=null && b == null) return false
        if(a.val !== b.val) return false

        return compare(a.left, b.right) && compare(b.left, a.right)

    }

    return compare(root.left, root.right)
};


// 迭代
var isSymmetric = function(root) {
    if(!root) return true
    const queue = [root.left, root.right]

    while(queue.length) {
            const left = queue.shift()
            const right = queue.shift()
            if(left == null && right == null) continue

            if(left == null || right == null) return false
            if(left.val !== right.val) return false
            queue.push(left.left)
            queue.push(right.right) 
            queue.push(left.right)
            queue.push(right.left)
    }
    return true
};

// 对比字符串
var isSymmetric = function(root) {
    if(!root) return true
    const queue = [root]
    while(queue.length) {
        let len = queue.length
        const level = []
        while(len) {
            const cur = queue.shift()
            if(cur == null) {
                level.push(cur)
            } else {
               level.push(cur.val )
            queue.push(cur.left)
            queue.push(cur.right) 
            }
            
            len--
        }
        const str = level.toString()
        if(str !== level.reverse().toString()) {
            return false
        } 
    }
    return true
};
// @lc code=end

