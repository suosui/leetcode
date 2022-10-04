/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let maxSubLength = 0;
  const hasMap = new Map();
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hasMap.has(char)) {
      if (maxSubLength < right - left) {
        maxSubLength = right - left;
      }
      left = right = i;
      right++;
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
};
// @lc code=end

