/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Question: Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have **, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */
function twoSum(nums, target) {
  // Object to store numbers and their indices
  const numIndices = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // Calculate the complement (number needed to reach the target)
    const complement = target - num;

    // Check if the complement exists in our numIndices object
    if (numIndices.hasOwnProperty(complement)) {
      // If found, return the indices of the complement and current number
      return [numIndices[complement], i];
    }

    // If not found, add the current number and its index to numIndices
    numIndices[num] = i;
  }

  // If no solution is found, return an empty array
  return [];
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]
