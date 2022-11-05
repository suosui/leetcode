/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    houses.sort((a, b) => { return a - b });
    heaters.sort((a, b) => { return a - b });
    let maxRadius = 0;
    for (let house of houses) {
        let nearestHeater = binary_search(heaters, house);
        let dist = Math.abs(nearestHeater - house);
        if (dist > maxRadius) {
            maxRadius = dist;
        }
    }
    return maxRadius;
};

function binary_search (arr, item) {
    if (arr.length == 1) return arr[0];
    const nearest = {
        idx: 0,
        dist: Math.abs(arr[0] - item),
    }
    let low = 0;
    let height = arr.length - 1;
    while (low < height) {
        const mid = parseInt((height + low) / 2);
        const distH = Math.abs(arr[height] - item);
        if (distH < nearest.dist) {
            nearest.idx = height;
            nearest.dist = distH;
        }
        const distL = Math.abs(arr[low] - item);
        if (distL < nearest.dist) {
            nearest.idx = low;
            nearest.dist = distL;
        }
        const distM = Math.abs(arr[mid] - item);
        if (distM < nearest.dist) {
            nearest.idx = mid;
            nearest.dist = distM;
        }
        let guess = arr[mid]
        if (guess == item) {
            return guess
        } else if (guess > item) {
            height = mid - 1
        } else {
            low = mid + 1
        }
    }
    return arr[nearest.idx];
}
// @lc code=end

