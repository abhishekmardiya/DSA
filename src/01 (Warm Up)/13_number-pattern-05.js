// Star Pattern

// Print the following number pattern of size n

// Input: n=5 (rows and columns)
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

const generatePattern = (n) => {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j < i + 1; j++) {
			row = `${row} ${j % 2 === 0 ? 1 : 0}`;
		}

		console.log(row);
	}
};

const n = 5;
generatePattern(n);

// Time complexity: O(n^2)
// Space complexity: O(n)
