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
     * @return {number[]}
     */
    preorderTraversal(root: TreeNode | null): number[] {
        const stack:TreeNode[] = [], result:number[] = [];
        let current=root;
        
        while(current||stack.length>0){
            if(current){
                result.push(current.val);
                stack.push(current.right);
                current = current.left;
            }else{
                current = stack.pop()
            }
        }

        return result;
    }
}
