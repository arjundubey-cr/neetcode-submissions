class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let value = {};
        for(let i=0; i<nums.length; i++){
            if(value.hasOwnProperty(nums[i])){
                return true;
            }
            value[nums[i]] = 1;
        }
        return false;
    }
}
