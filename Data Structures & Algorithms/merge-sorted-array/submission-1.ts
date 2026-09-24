class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let pointer_1 = m - 1;
        let pointer_2 = n - 1;
        let pointer_3 = m + n - 1;

        while (pointer_2 >= 0) {
            if (pointer_1 >= 0 && nums1[pointer_1] > nums2[pointer_2]) {
                nums1[pointer_3] = nums1[pointer_1];
                pointer_1--;
            } else {
                nums1[pointer_3] = nums2[pointer_2];
                pointer_2--;
            }

            pointer_3--;
        }
    }
}
