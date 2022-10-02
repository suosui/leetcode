/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      for (let j = nums.length - 1; j > i - 1; j--) {
        if (nums[j] > nums[i - 1]) {
          swap(nums, i - 1, j);
          qSort(nums, i, nums.length - 1);
          return;
        }
      }
    }
  }
  nums.sort((a, b) => { return a - b });
  return;
};

var swap = (nums, i, j) => {
  [nums[j], nums[i]] = [nums[i], nums[j]];
}

function partition(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function qSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    qSort(arr, low, pivot - 1);
    qSort(arr, pivot + 1, high);
  }
  return arr;
}
// @lc code=end

