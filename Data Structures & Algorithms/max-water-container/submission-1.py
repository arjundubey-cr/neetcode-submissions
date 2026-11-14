class Solution:
    def maxArea(self, height: list[int]) -> int:
        left = 0
        right = len(height) - 1
        max_water = -1
        while left < right:
            right_height = height[right]
            left_height = height[left]
            area = min(right_height, left_height) * abs(left-right)
            max_water = max(area, max_water)

            if right_height < left_height:
                right-=1
            else:
                left+=1 
        
        return max_water
            


        