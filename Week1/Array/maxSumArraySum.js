// based on kadane's algorithm
let arr = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArraySum(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    for(let i=1;i<arr.length;i++){
        maxSum = Math.max(arr[i], maxSum+arr[i])
        currentSum = Math.max(currentSum, maxSum)
    }
    return currentSum

}

console.log(maxSubArraySum(arr));