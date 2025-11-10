// Count Digit

// Count the Number of Digits in an Integer

// Input: 259
// output: 3

const countDigit = (num) => {
	// Math.abs() --> Returns the absolute value of a number, converting negatives to positives.
	// Examples:
	// Math.abs(-123) → 123
	// Math.abs(123) → 123
	// Math.abs(0) → 0
	num = Math.abs(num);

	if (num === 0) {
		return 1;
	}

	let count = 0;
	while (num > 0) {
		// Math.floor() --> Rounds a number down to the nearest integer (removes the decimal part).
		// Examples:
		// Math.floor(7.8) → 7
		// Math.floor(3.2) → 3
		// Math.floor(-4.7) → -5

		num = Math.floor(num / 10);
		count++;
	}

	return count;
};

const num = 259;

const ans = countDigit(num);
console.log("ans:", ans);

// Time complexity: O(log n)
// Space complexity: O(1)
