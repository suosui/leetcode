/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
// @lc code=start
function lengthOfLongestSubstring(s) {
    let maxSubLength = 0;
    const hasMap = new Map();
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (hasMap.has(char)) {
            const leftCharIdx = hasMap.get(char);
            if (maxSubLength < right - left) {
                maxSubLength = right - left;
            }
            left = leftCharIdx + 1;
            right = i + 1;
            hasMap.forEach((value, key) => {
                if (value < leftCharIdx + 1) {
                    hasMap.delete(key);
                }
            })
            hasMap.set(char, i);
            continue;
        }
        hasMap.set(char, i);
        right++;
    }
    if (maxSubLength < right - left) {
        maxSubLength = right - left;
    }
    return maxSubLength;
}
;
// @lc code=end
