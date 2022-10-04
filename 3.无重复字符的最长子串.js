/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
// @lc code=start
function lengthOfLongestSubstring(s) {
    var maxSubLength = 0;
    var hasMap = new Map();
    var left = 0;
    var right = 0;
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (hasMap.has(char)) {
            const leftCharIdx = hasMap.get(char);
            if (maxSubLength < right - left) {
                maxSubLength = right - left;
            }
            // right = left = i;
            left = leftCharIdx+1;
            left = i - 1;
            right = i + 1;
            hasMap.clear();
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
lengthOfLongestSubstring('abcabcbb')
// @lc code=end
