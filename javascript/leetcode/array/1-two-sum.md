```javascript
function twoSum(nums: number[], target: number): number[] {
  // Object to store numbers and their indices
  const numIndices: { [key: number]: number } = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // Calculate the complement (number needed to reach the target)
    const complement = target - num;

    // Check if the complement exists in our numIndices object
    if (complement in numIndices) {
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
const nums1: number[] = [2, 7, 11, 15];
const target1: number = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2: number[] = [3, 2, 4];
const target2: number = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3: number[] = [3, 3];
const target3: number = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]
```