// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const generatePattern = (n) => {
	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = 0; j <= i; j++) {
			row = `${row} ${j + 1}`;
		}

		console.log(row.trim());
	}
};

const n = 5;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n)
