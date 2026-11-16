class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charset = set()
        left = 0
        right = 0
        max_length = 0

        for i in range(len(s)):
            while s[i] in charset:
                charset.remove(s[left])
                left += 1

            charset.add(s[i])
            right += 1

            max_length = max(max_length, right - left)

        return max_length