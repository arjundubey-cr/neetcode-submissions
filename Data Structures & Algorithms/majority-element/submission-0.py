class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        numset = set(nums)
        max_count = 0
        max_count_number = -1
        for num in numset:
            if nums.count(num)>max_count:
                max_count = nums.count(num)
                max_count_number = num
        
        return max_count_number