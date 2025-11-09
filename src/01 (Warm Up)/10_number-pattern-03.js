// Star Pattern

// Print the following number pattern of size n:

// Input: n=5 (rows and columns)
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

const generatePattern = (n) => {
	for (let i = n; i > 0; i--) {
		let row = "";
		for (let j = i; j > 0; j--) {
			row = `${row} ${i}`;
		}

		console.log(row.trim());
	}
};

const n = 5;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n)
