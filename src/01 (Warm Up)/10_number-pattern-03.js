// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// output:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

const generatePattern = (n) => {
	const pattern = [];
	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = 0; j < n - i; j++) {
			row = `${row} ${j + 1}`;
		}

		pattern.push(row.trim());
	}
	return pattern;
};

export { generatePattern };

const n = 5;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n)
