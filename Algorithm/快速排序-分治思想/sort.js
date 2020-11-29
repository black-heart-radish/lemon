// function cb(a, b) {
//     return a - b;
// }
function partition(arr, left, right) {
    if (left >= right) {
        return;
    }
    let i = left,
        j = right;
    let benchmark = arr[i];
    while(i < j) {
        while(i < j && benchmark <= arr[j]) {
            j--;
        }
        arr[i] = arr[j];
        while(i < j && benchmark >= arr[i]) {
            i++;
        }
        arr[j] =arr[i];
    }
    arr[i] = benchmark;
    partition(arr, left, i - 1);
    partition(arr, i + 1, right);
}
function quick_sort(arr) {
    partition(arr, 0, arr.length - 1);
    return arr;
}
let arr = [5, -1, 9, 7, 3, 6, 1, 0, 2, 4, 8];
console.log(quick_sort(arr));