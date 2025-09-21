// Linear search function


function linearSearch(arr, target){
    for(let i in arr){
        if(arr[i]=== target) return i;
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5], 5));