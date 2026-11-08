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
// type TreeNode = {
//     val: number,
//     left: TreeNode | null,
//     right: TreeNode | null,
// }

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const stack:TreeNode[] = []
        const result = [];
        let current:TreeNode = root;
        
        while(current || stack.length>0){
            while(current){
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.val);
            
            current = current.right;
        }
        return result;
    }
}
