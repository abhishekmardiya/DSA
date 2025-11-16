// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31 , 2^31 - 1], then return 0.
// LeetCode: https://leetcode.com/problems/reverse-integer/description/

// Input: -123
// Output: -321

// Test Cases:
// Input: 123 --> Output: 321
// Input: 120 --> Output: 21
// Input: 2147483647 --> Output: 0 (exceeds 32-bit positive integer range)
// Input: -2147483648 --> Output: 0 (exceeds 32-bit negative integer range)

// Constraints: -2^31 <= x <= 2^31 - 1

const reverseInteger = (num) => {
	const original = num;

	if (num < 0) {
		num = Math.abs(num);
	}

	let rev = 0;
	while (num > 0) {
		const rem = num % 10;
		rev = rev * 10 + rem;
		num = Math.floor(num / 10);
	}

	// Introduced in ES2016, the infix exponentiation operator ** is an alternative for the standard Math.pow function.
	const constraint = 2 ** 31;
	if (rev > constraint || rev < -constraint) {
		return 0;
	}

	return original < 0 ? -rev : rev;
};

const num = -123;

const ans = reverseInteger(num);
console.log("ans:", ans);

export { reverseInteger };
