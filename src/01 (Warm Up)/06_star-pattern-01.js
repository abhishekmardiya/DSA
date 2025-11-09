// Star Pattern

// Print the following star pattern of size n:

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

		// trim() itself is O(k) where k = length of that row string — but that row string is already being built char by char inside your inner loop anyway.
		// so adding trim does not change the Big-O at all.
		console.log(row.trim());
	}
};

const n = 4;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n) --> because only one row string of length n exists at a time and is printed then discarded.
// so auxiliary space = only one string = length n → O(n)
// Auxiliary space means the extra temporary space your algorithm uses during execution (not counting the input itself).
