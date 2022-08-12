/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 广度优先判断
 var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false
    const queue = [p]
    const queue2 = [q]
    while(queue.length) {
        const top = queue.shift()
        const top2 = queue2.shift()
        if(top.val == top2.val  && top.left?.val == top2.left?.val && top.right?.val == top2.right?.val) {
            top.left && queue.push(top.left)
            top.right && queue.push(top.right)

            top2.left && queue2.push(top2.left)
            top2.right && queue2.push(top2.right)
        } else {
            return false
        }
    }
    return true

};

// 深度优先 判断
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
  
    if (
      p.val == q.val &&
      p.left?.val === q.left?.val &&
      p.right?.val === q.right?.val
    ) {
     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
      return false;
    }
  };
// @lc code=end

