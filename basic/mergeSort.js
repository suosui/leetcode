// 归并排序 
// 1. 改变原数组 
// 2. 时间复杂度O(nlogn)。 空间复杂度O(n)
// 3. 稳定算法
const merge = (arr, L, M, R) => {
    const help = [];
    let i = 0;
    let p1 = L;
    let p2 = M + 1;
    while (p1 <= M && p2 <= R) {
        help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
    }
    while (p1 <= M) {
        help[i++] = arr[p1++];
    }
    while (p2 <= M) {
        help[i++] = arr[p2++];
    }
    for (let i = 0; i < help.length; i++) {
        arr[L + i] = help[i];
    }
}

const process = (arr, L, R) => {
    if (L === R) {
        return;
    }
    const mid = Math.floor(L + ((R - L) >> 2));
    process(arr, L, mid);
    process(arr, mid + 1, R);
    merge(arr, L, mid, R);
}

const mergeSort = (arr) => {
    if (!arr || arr.length < 2) {
        return;
    }
    process(arr, 0, arr.length - 1);
}


let arr = [76, 3, 22, 42, 4, 2];
let arr2 = [76, 3, 22, 42, 4];
mergeSort(arr)
mergeSort(arr2)
console.log(arr);
console.log(arr2);