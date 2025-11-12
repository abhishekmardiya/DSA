// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// output:
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

const generatePattern = (n) => {
	const pattern = [];
	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = 0; j < i + 1; j++) {
			// number % 2 === 0 --> Even
			// number % 2 !== 0 --> Odd
			// `%` is the modulo operator, used to get the remainder after division

			row = `${row} ${j % 2 === 0 ? 1 : 0}`;
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
