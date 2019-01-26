function hourglassSum(arr) {
  let maxSum = 0;
  for (let i = 0; i <= arr.length - 3; i++) {
    // console.info(arr[i].length);
    const len = arr[i].length - 3;
    for (let j = 0; j <= len; j++) {
      const top = arr[j][i] + arr[j][i + 1] + arr[j][i + 2];
      const mid = arr[j + 1][i + 1];
      const bottom = arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
      const sum = top + mid + bottom;
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

console.info(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ])
);
