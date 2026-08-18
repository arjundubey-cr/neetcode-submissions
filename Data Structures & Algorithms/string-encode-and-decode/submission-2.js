class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => `${str.length}:${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 4#neet4#code4#love
    decode(s) {
        const result = [];
        let i = 0;
        while (i < s.length) {
            // Find the position of the delimiter
            let delimiterIndex = s.indexOf(':', i);
            // Extract the length of the next string
            let length = parseInt(s.slice(i, delimiterIndex), 10);
            // Extract the string using the length
            let str = s.slice(delimiterIndex + 1, delimiterIndex + 1 + length);
            // Add the string to the result
            result.push(str);
            // Move the index to the start of the next length prefix
            i = delimiterIndex + 1 + length;
        }
        return result;
    }
}
