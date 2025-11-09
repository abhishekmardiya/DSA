// Star Pattern

// Print a left-aligned incremental star triangle of size n.

// Input: n=4 (rows and columns)
// *
// * *
// * * *
// * * * *

const generatePattern = (n) => {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j <= i; j++) {
			row = `${row} *`;
		}

		console.log(row);
	}
};

const n = 4;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n)
