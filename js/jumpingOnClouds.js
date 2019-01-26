function jumpingOnClouds(c) {
  let steps = 0;
  const length = c.length;
  for (let i = 0; i <= length - 1; i++) {
    if (c[i] == 0) {
      if ((c[i + 1] && c[i + 2] == 0) || (c[i + 1] == 0 && c[i + 2] == 0)) {
        i += 1;
        steps += 1;
      } else if (c[i + 1] == 0) {
        steps += 1;
      }
    }
  }
  return steps;
}
console.info(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
