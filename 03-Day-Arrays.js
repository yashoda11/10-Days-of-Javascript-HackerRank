/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const maxNum = Math.max(...nums);
    
    const newarray = nums.filter(
        num => num !== maxNum
    );
    
    const secondMaxNum = Math.max(...newarray);
    
    console.log(secondMaxNum);
}

const nums = [2, 6 , 6, 3, 5];
getSecondLargest(nums);