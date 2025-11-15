// Input: 12321 (odd number)
// Output: true

// Input: 123321 (even number)
// Output: true

// Test Cases:
// Input: 1210 --> output: false

const isPalindrome = (num) => {
	// If the number ends with zero, it's not a palindrome
	// For example: 1233210 is not a palindrome as its reverse is 0123321, which is not a valid number.
	if (num < 0 || (x !== 0 && num % 10 === 0)) {
		return false;
	}

	// Store the original number for comparison
	const original = num;
	const revHalf = 0;

	while (num > 0) {}

	return revHalf === original;
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
// 1. Extract each digit from the end using modulo 10. (num % 10 = rem)
// When you perform a modulo operation on any number with 10, the result gives the last digit of that number.
// Example: 1234 % 10 = 4

// 2. Append the digit to the reversed number by multiplying current reversed by 10 and adding the digit. (rev * 10 + rem)
// This effectively appends the extracted digit to the reversed number, similar to concatenation, without performing addition.

// 3. Remove the last digit from the current number by dividing by 10 and using Math.floor for integer division. (Math.floor(num / 10))

// 4. After processing all digits, compare the reversed number with the original. If equal, it's a palindrome.
