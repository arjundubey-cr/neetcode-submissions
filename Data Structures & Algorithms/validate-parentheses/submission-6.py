class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        brackets = {'}': '{', ']': '[', ')' : '('}
        for i in range(0, len(s)):
            current = s[i]

            if current == "(" or current == "{" or current == "[":
                stack.append(current)
            
            else:
                if not stack:
                    return False
                top = stack[-1]
                if brackets[current]!=top:
                    return False
                
                else:
                    stack.pop()
        
        return len(stack)==0
        