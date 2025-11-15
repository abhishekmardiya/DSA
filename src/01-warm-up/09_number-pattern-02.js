// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

const generatePattern = (n) => {
	const pattern = [];
	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = 0; j <= i; j++) {
			row = `${row} ${i + 1}`;
		}

		pattern.push(row.trim());
	}
	return pattern;
};

const n = 5;
generatePattern(n);

export { generatePattern };

// Time complexity: O(n^2)
// Space complexity: O(n)
