class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        min_array_length = min(len(word1), len(word2))

        first_pointer = 0
        second_pointer = 0
        final_string = ""

        while first_pointer<min_array_length or second_pointer<min_array_length:
            final_string = final_string + word1[first_pointer] + word2[second_pointer]
            first_pointer+=1
            second_pointer+=1

        
        if min_array_length<len(word1):
            final_string = final_string + word1[min_array_length:]

        elif min_array_length<len(word2):
            final_string = final_string + word2[min_array_length:]
        
        return final_string