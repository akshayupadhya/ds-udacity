function repeatedString(s, n) {
  s = s.split("");
  let l = s.length;
  let count = 0;
  const quoutient = Math.floor(n / l);
  const product = quoutient * l;
  count = s.filter(i => i == "a").length * quoutient;
  for (let i = product; i <= n - 1; i++) {
    let mod = i % l;
    if (s[mod] === "a") count += 1;
    console.log(count, i);
  }
  // return arr.filter(i => i == "a").length;
  return count;
}
console.time();
console.info(repeatedString("a", 1000000000000));
console.timeEnd();
