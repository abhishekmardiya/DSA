// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// output:
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

const generatePattern = (n) => {
	const pattern = [];
	let current = 1;

	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = 0; j <= i; j++) {
			// current ? 1 : 0 is basically current===1 ? 1 : 0
			row = `${row} ${current ? 1 : 0}`;

			// changing `current` on every iteration
			// current ? 0 : 1 is basically current===1 ? 0 : 1
			current = current ? 0 : 1;
		}

		pattern.push(row);
	}
	return pattern;
};

const n = 5;
generatePattern(n);

export { generatePattern };

// Time complexity: O(n^2)
// Space complexity: O(n)
