/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode.cn/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (39.45%)
 * Likes:    824
 * Dislikes: 0
 * Total Accepted:    142.4K
 * Total Submissions: 360.8K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。
 * 
 * s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。
 * 
 * 
 * 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"，
 * "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
 * 
 * 
 * 返回所有串联字串在 s 中的开始索引。你可以以 任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "barfoothefoobarman", words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
 * 子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
 * 子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
 * 输出顺序无关紧要。返回 [9,0] 也是可以的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
 * 输出：[]
 * 解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
 * s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
 * 所以我们返回一个空数组。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
 * 输出：[6,9,12]
 * 解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
 * 子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
 * 子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
 * 子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * 1 <= words.length <= 5000
 * 1 <= words[i].length <= 30
 * words[i] 和 s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 
 *  方法一：滑动窗口+哈希表
 *  思路：
 *     1. 首先判断s的长度是否小于words中所有单词的长度之和，如果小于直接返回[]
 *     2. 用哈希表hasMap存储words中所有单词的出现次数
 *     3. 用l和r两个指针，r指针每次移动一个单词的长度，判断r-l是否等于words中所有单词的长度之和
 *     4. 如果等于，说明找到了一个符合条件的子串，将l加入结果集，然后重置hasMap，l和r指针
 *     5. 获取r指针下一个单词，如果在hasMap中，且出现次数大于0，r指针继续移动，否则重置hasMap，l和r指针
 *     6. 如果不在hasMap中，重置hasMap，l和r指针
 *     7. 返回结果集
 *  复杂度：
 *     时间复杂度：O(n)
 *     空间复杂度：O(n)
 *  代码：
 *      var findSubstring = function (s, words) {
 *          if (s.length < words[0].length * words.length) {
 *              return []
 *          }
 *          let hasMap = {};
 *          for (let word of words) {
 *              if (!hasMap[word]) {
 *                  hasMap[word] = {
 *                      cnt: 0,
 *                      originCnt: 0,
 *                  }
 *              }
 *              hasMap[word].cnt++;
 *              hasMap[word].originCnt++;
 *          }
 *          let toReturn = [];
 *          let l = 0;
 *          let r = 0;
 *          while (r <= s.length) {
 *              if (r - l === words[0].length * words.length) {
 *                  toReturn.push(l);
 *                  resetHasMap(hasMap);
 *                  l = r = l + 1;
 *              }
 *              let nextWord = getNextWord(r, s, words[0].length);
 *              if (hasMap[nextWord]) {
 *                  if (hasMap[nextWord].cnt > 0) {
 *                      hasMap[nextWord].cnt--;
 *                      r += words[0].length;
 *                  } else {
 *                      resetHasMap(hasMap);
 *                      l = r = l + 1;
 *                  }
 *              } else {
 *                  resetHasMap(hasMap);
 *                  l = r = l + 1;
 *              }
 *          }
 *          return toReturn;
 *      };
 *      
 *      var resetHasMap = (hasMap) => {
 *          for (let key in hasMap) {
 *              hasMap[key].cnt = hasMap[key].originCnt;
 *          }
 *      }
 *      
 *      var getNextWord = (startIdx, s, length) => {
 *          let word = '';
 *          let i = startIdx;
 *          if (startIdx + length > s.length) {
 *              return word;
 *          }
 *          let cnt = 0;
 *          while (cnt < length) {
 *              word += s[i];
 *              i++;
 *              cnt++;
 *          }
 *          return word;
 *      }
 */
var findSubstring = function (s, words) {

};
// @lc code=end

