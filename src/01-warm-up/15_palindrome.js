// Palindrome

// Given an integer x, return true if x is a palindrome, and false otherwise.

// `Palindrome`: A palindrome is a number that reads the same backward as forward.
// NOTE: Any single digit number (including 0) is a palindrome

// Input: 121
// Output: true

// Test Cases:
// Input: -121 --> output: false (negative numbers are not palindromes)
// Input: 259 --> output: false

const isPalindrome = (num) => {
	// If the number is negative or ends with zero, it's not a palindrome
	// For example: 1233210 is not a palindrome as its reverse is 0123321, which is not a valid number.
	if (num < 0 || (num !== 0 && num % 10 === 0)) {
		return false;
	}

	// Store the original number for comparison
	const original = num;
	let rev = 0;

	// Keep processing digits as long as there are digits left in the number
	while (num > 0) {
		const rem = num % 10; // step - 1
		rev = rev * 10 + rem; // step - 2
		num = Math.floor(num / 10); // step - 3
	}

	return rev === original;
};

const num = 121;

const ans = isPalindrome(num);
console.log("ans:", ans);

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
