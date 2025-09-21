let array = [1, 2, 3, 4, 5];

function rotateArrayByK(arr, k) {
    let kArr=[]
    while (k > 0) {
        kArr.push(arr.pop())
        k--
    }
    return kArr.concat(arr)
}
console.log(rotateArrayByK(array, 2));
array = [1, 2, 3, 4, 5];
console.log(array);

// Inplace rotation
function inplaceRotateByK(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
}

function reverse(arr, start, end) {
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
console.log(inplaceRotateByK(array, 2), array);

