/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if(root===null) return true;

        let left = dfs(root.left);
        let right = dfs(root.right);

        if(Math.abs(left-right)>1) return false;

        return this.isBalanced(root.left)&&this.isBalanced(root.right);


        function dfs(root){
            if(!root) return 0;
            const left = dfs(root.left);
            const right = dfs(root.right);
            return 1+Math.max(left, right);
        }
        
    }
}
