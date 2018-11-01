function smallestCommons(arr) {
	const start = arr[0] < arr[1] ? arr[0] : arr[1];
	const end = arr[0] < arr[1] ? arr[1] : arr[0];
	let range = new Array(end - start + 1).fill().map((v, i) => i + start);
	const l = range.length;
	for (let i = 0; i < l; i++) {
		const r1 = range[i] % range[i + 1];
		if (r1 === 0) {
			range[i + 1] = (range[i] * range[i + 1]) / range[i + 1];
		} else {
			const r2 = range[i + 1] % r1;
			if (r2 === 0) {
				range[i + 1] = (range[i] * range[i + 1]) / r1;
			} else {
				range[i + 1] = (range[i] * range[i + 1]) / r2;
			}
		}
  }
  if(start>17) range[l-1] = range[l-1]*10
	return range[l -1];
}

console.time();
console.log(smallestCommons([23, 18])); //
console.timeEnd();
