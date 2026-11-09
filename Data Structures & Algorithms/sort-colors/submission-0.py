class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        count_0 = []
        count_1 = []
        count_2 = []

        for num in nums:
            if num == 0:
                count_0.append(0)
            elif num == 1:
                count_1.append(1)
            else:
                count_2.append(2)
        nums[:] = [*count_0, *count_1, *count_2]

        
        