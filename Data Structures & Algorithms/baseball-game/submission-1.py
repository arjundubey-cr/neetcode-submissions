class Solution:
    def calPoints(self, operations: List[str]) -> int:
        score_track = []
        for value in operations:
            if value == "+":
                first = score_track[-1]
                second = score_track[-2]
                sum_value = first+second
                score_track.append(sum_value)
            
            elif value == "D":
                top = score_track[-1]
                score_track.append(top*2)
            
            elif value == "C":
                top = score_track.pop()
            
            else:
                score_track.append(int(value))

        return sum(score_track)
        