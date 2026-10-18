/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let left = 1, right=n;
        while(true)
        {
            let mid = Math.floor((left+right)/2);
            
            let result = guess(mid)
            if(result>0){
                left = mid+1;
            }else if(result<0){
                right = mid - 1;
            }else{
                return mid;
            }
        }
    }
}
