// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// output:
//     		*
// 		  * *
//	    * * *
//    * * * *
// * * * * * *

const generatePattern = (n) => {
	const pattern = [];
	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = n; j > 0; j--) {
			row = `${row} ${j > i + 1 ? " " : "*"}`;
		}

		pattern.push(row);
	}
	return pattern;
};

export { generatePattern };

const n = 5;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n)
