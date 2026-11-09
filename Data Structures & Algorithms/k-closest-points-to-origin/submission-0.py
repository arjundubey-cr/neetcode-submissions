class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        def distance(x, y):
            return (x*x+y*y)**0.5
        
        closest_point = []
        result = []

        for [x, y] in points:
            current_distance = distance(x, y)
            heapq.heappush_max(closest_point, (current_distance, x, y));

            if len(closest_point)>k:
                heapq.heappop_max(closest_point)
            
        for _,x,y in closest_point:
            result.append([x, y])

        return result

        