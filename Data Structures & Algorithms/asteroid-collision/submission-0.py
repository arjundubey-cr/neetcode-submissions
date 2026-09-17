class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:

        asteroid_stack = []

        for curr_asteroid in asteroids:
            while asteroid_stack and asteroid_stack[-1] > 0 and curr_asteroid < 0:
                top = asteroid_stack[-1]

                if abs(top) < abs(curr_asteroid):
                    asteroid_stack.pop()

                elif abs(top) == abs(curr_asteroid):
                    asteroid_stack.pop()
                    curr_asteroid = 0
                    break

                else:
                    curr_asteroid = 0
                    break

            if curr_asteroid != 0:
                asteroid_stack.append(curr_asteroid)

        return asteroid_stack