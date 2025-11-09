// Star Pattern

// Print a square star pattern of size n.

// Input: n=4 (rows and columns)
// output:
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

const generatePattern = (n) => {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j < n; j++) {
			row = `${row} *`;
		}

		console.log(row);
	}
};

const n = 4;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n) --> because only one row string of length n exists at a time and is printed then discarded.
// so auxiliary space = only one string = length n → O(n)
// Auxiliary space means the extra temporary space your algorithm uses during execution (not counting the input itself).
