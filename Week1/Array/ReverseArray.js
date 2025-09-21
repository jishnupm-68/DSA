let array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    let reverseArray =[];
    for(let i=arr.length-1;i>=0;i--) reverseArray.push(arr[i]);
    return reverseArray;
}
console.log(reverseArray(array));
console.log("after reverseArray function call: ",array);
function inPlaceReverseArray (array){
    let left = 0, right = array.length - 1;
    while(left<right){
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
}
console.log("after inPlaceReverseArray function call: ", array);