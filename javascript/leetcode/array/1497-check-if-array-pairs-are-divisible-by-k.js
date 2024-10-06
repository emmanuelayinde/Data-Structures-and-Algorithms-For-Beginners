/**
 * @param {*} arr
 * @param {*} k
 * @returns
 *
 * Given an array of integers `arr` and an integer `k`, check if it is possible to divide the array into pairs such that the sum of each pair is divisible by k.
 *
 * Example 1:
 * Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
 * Output: true
 * Explanation: Pairs can be formed as (1,4), (2,3), (6,9), (7,8), (10,5).
 */
const canArrange = function (arr, k) {
  const freq = new Array(k).fill(0);

  for (const num of arr) {
    let rem = num % k;
    if (rem < 0) {
      rem += k;
    }
    freq[rem]++;
  }

  if (freq[0] % 2 !== 0) {
    return false;
  }

  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (freq[i] !== freq[k - i]) {
      return false;
    }
  }

  return true;
};
