class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left=0, right=1;
        let final_profit = 0;

        while(right<prices.length){
            if(prices[left]<prices[right]){
                let profit = prices[right] - prices[left];
                final_profit = Math.max(final_profit, profit)
            } 
            else {
                left = right;
            }
            right++
        }

        return final_profit;
    }
}
