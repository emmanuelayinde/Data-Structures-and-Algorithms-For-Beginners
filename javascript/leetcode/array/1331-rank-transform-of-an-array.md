# Leetcode 1331. Rank Transform of an Array

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function arrayRankTransform(arr: number[]): number[] {
    // Create a copy of the original array
    const arrCopy = [...arr];

    // Sort the copied array
    arrCopy.sort((a, b) => a - b);

    // Assign ranks using a map, avoiding duplicate ranks
    let rank = 1;
    const rankMap: { [key: number]: number } = {};

    for (const val of arrCopy) {
        if (!(val in rankMap)) {  // Check if the element already has a rank
            rankMap[val] = rank;
            rank++;
        }
    }

    // Assign ranks to the original array based on the rankMap
    const result = arr.map(val => rankMap[val]);

    return result;
}
```