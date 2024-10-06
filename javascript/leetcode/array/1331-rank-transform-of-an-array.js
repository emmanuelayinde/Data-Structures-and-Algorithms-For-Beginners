function arrayRankTransform(arr) {
  // Create a copy of the original array
  const arrCopy = [...arr];

  // Sort the copied array
  arrCopy.sort((a, b) => a - b);

  // Assign ranks using a map, avoiding duplicate ranks
  let rank = 1;
  const rankMap = {};

  for (const val of arrCopy) {
    if (!(val in rankMap)) {
      // Check if the element already has a rank
      rankMap[val] = rank;
      rank++;
    }
  }

  // Assign ranks to the original array based on the rankMap
  const result = arr.map((val) => rankMap[val]);

  return result;
}
