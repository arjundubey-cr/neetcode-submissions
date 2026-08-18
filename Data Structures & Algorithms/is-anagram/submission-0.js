class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let length1 = s.length;
        let length2 = t.length;

        if(length1!==length2) return false;

        let freqArr = new Array(26).fill(0);
        
        for(let i=0; i<length1; i++)
        {
            freqArr[s[i].charCodeAt(0)-"a".charCodeAt(0)]++;
            freqArr[t[i].charCodeAt(0)-"a".charCodeAt(0)]--;
        }
        for(let i=0; i<26; i++){
            if(freqArr[i]!==0) return false;
        }
        return true;
    }
}
