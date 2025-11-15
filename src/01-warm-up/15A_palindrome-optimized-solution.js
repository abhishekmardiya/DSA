// Input: 12321 (odd number)
// Output: true

// Input: 123321 (even number)
// Output: true

// Test Cases:
// Input: 1210 --> output: false

const isPalindrome = (num) => {
	if (num < 0 || (num !== 0 && num % 10 === 0)) {
		return false;
	}

	let revHalf = 0;

	// Keep processing digits until the reversed half is greater than to the remaining original number.
	// This ensures we've checked half the digits (works for both even and odd number lengths).
	while (num > revHalf) {
		const remainder = num % 10;
		revHalf = revHalf * 10 + remainder;
		num = Math.floor(num / 10);
	}

	// First condition: for even numbers
	// Second condition: for odd numbers, check if revHalf === num after removing the last digit of updated revHalf
	return num === revHalf || num === Math.floor(revHalf / 10);
};

const num1 = 12321;
const ans1 = isPalindrome(num1);
console.log("ans1:", ans1);

const num2 = 123321;
const ans2 = isPalindrome(num2);
console.log("ans2:", ans2);

export { isPalindrome };

// Time complexity: O(log n)
// Space complexity: O(1)

// Approach:
// 1. If the number is negative or ends with zero, return false (not a palindrome).
// 2. Reverse only the last half of the digits by extracting the last digit of num (num % 10) and growing revHalf (revHalf * 10 + last digit).
// 3. Continue until revHalf > num (i.e., reversed half exceeds remaining original).
// 4. For an even number of digits, num === revHalf means palindrome and For an odd number of digits, ignore the middle digit by Math.floor(revHalf / 10), and check num === Math.floor(revHalf / 10).

// Comparison with Regular Solution (15_palindrome.js):

// Time Complexity: Both O(log n)
//   - Regular: Processes all digits of the number
//   - Optimized: Processes approximately half the digits (~50% fewer iterations)
//   - In practice, optimized version is faster due to early termination

// Space Complexity: Both O(1)
//   - Both use constant extra space (only a few variables)

// Key Differences:
// Regular solution reverses the entire number, then compares with original
// Optimized solution only reverses half the digits, then compares halves directly

// Example for 12321:
//   Regular: Processes all 5 digits → rev = 12321 → compares with original
//   Optimized: Processes ~2.5 digits → revHalf = 12, num = 123 → compares 123 === 12 (false) → checks 123 === Math.floor(12/10) = 1 (false) → continues → revHalf = 123, num = 12 → stops → compares 12 === 123 (false) → checks 12 === Math.floor(123/10) = 12 (true) ✓
