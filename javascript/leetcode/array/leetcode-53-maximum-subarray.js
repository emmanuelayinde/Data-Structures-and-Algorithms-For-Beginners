// Leetcode 53: Maximum Subarray || Kadane's Algorithm

/**
 * @param {number[]} nums
 * @return {number}
 *
 * Question: Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6

// Leetcode 53: Maximum Subarray || Brute-Force Approach

// function maxSubArray(nums) {
//   // Initialize maxSum with the first element of the array
//   let maxSum = nums[0];

//   // Outer loop: iterate through each element as a starting point
//   for (let i = 0; i < nums.length; i++) {
//     // Initialize currentSum for each subarray
//     let currentSum = 0;
//     // Inner loop: calculate sum of subarrays starting from index i
//     for (let j = i; j < nums.length; j++) {
//       // Add current element to the subarray sum
//       currentSum += nums[j];
//       // Update maxSum if currentSum is greater
//       maxSum = Math.max(maxSum, currentSum);
//     }
//   }

//   // Return the maximum subarray sum found
//   return maxSum;
// }
