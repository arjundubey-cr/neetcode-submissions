class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const final_res = new Array(temperatures.length).fill(0);
        const stack = [];

        for(let i=0; i<temperatures.length; i++)
        {
            const curr_temp = temperatures[i];
            while(stack.length>0 && curr_temp > stack[stack.length-1][0]){
                const [stackTemp, stackIndex] = stack.pop();
                final_res[stackIndex] = i-stackIndex
            }
            stack.push([curr_temp, i])
        }
        return final_res;
    }
}
