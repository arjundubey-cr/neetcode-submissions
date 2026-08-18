class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let alreadyVisited = {};
        for(let i=0; i<nums.length; i++){
            let required = target - nums[i];
            if(alreadyVisited.hasOwnProperty(required)){
                return [alreadyVisited[required], i];
            }
            alreadyVisited[nums[i]] = i;
        }
        return [];
    }
}
