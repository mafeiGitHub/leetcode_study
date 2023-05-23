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
var isSymmetric = function (root) {
    return isMirror(root,root)
};
var isMirror = function (t1, t2) {
    if (t1 == null &&  t2 == null) return true
    else if (t1==null||t2==null) return false
    else {
        return (t1.val===t2.val)&&isMirror(t1.left,t2.right)&&isMirror(t1.right,t2.left)
    }
}