class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let window = new Set()
        let left=0, right=0
        for(right=0; right<nums.length; right++){
            if(right-left > k){
                window.delete(nums[left])
                left++;
            }
            if(window.has(nums[right])){
                return true;
            }
            window.add(nums[right]);
        }
        return false;
    }
}
