function rot13(str) {
	// LBH QVQ VG!
	const A = "A".charCodeAt(0),
		Z = "Z".charCodeAt(0),
		zero = "0".charCodeAt(0);
	return str
		.split("")
		.map(i => {
			let charCode = i.charCodeAt(0) - 13;

			if (charCode > zero && charCode < A) {
				charCode = i.charCodeAt(0) + 13;
			}
			// console.log(charCode, String.fromCharCode(charCode), A, Z, zero);
			console.log(/[A-Z]/gi.test(i));
			return /[A-Z]/gi.test(i) ? String.fromCharCode(charCode) : i;
		})
		.join("");
}
// console.log()
// Change the inputs below to test
console.log(rot13("SERR YBIR?"));
