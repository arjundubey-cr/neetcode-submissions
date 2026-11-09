# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None: return []

        result = []
        curr_level = deque([root])
        
        while curr_level:
            level_size = len(curr_level)
            level_values = []

            for _ in range(level_size):
                curr_node = curr_level.popleft()
                level_values.append(curr_node.val)

                if curr_node.left:
                    curr_level.append(curr_node.left)
                if curr_node.right:
                    curr_level.append(curr_node.right)
            
            result.append(level_values)
        
        return result
        