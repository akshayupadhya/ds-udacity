function sumPrimes(num) {
  let nums = Array(num - 1).fill().map((v, i) => i + 2)
  let primes = []
  let iter = 0
  for (let i = 1; (i < num - 1)&&(nums[iter]); i++) {
    primes.push(nums[iter])
    nums = nums.filter(num => (num % nums[iter] !== 0)||(nums[iter]===num))
    iter += 1
  }

  return primes.reduce((prev, sofar) => prev + sofar, 0);
}
// console.log()
console.time('prime')
console.log(sumPrimes(100)) //
console.timeEnd('prime')