// Palindrome

// Given an integer, determine if it is a palindrome.

// `Palindrome`: A palindrome is a number that reads the same backward as forward.

// Input: 121
// Output: true

// Test Cases:
// Input: -121 --> output: false (because "-121" !== "121-")
// Input: 259 --> output: false

const isPalindrome = (num) => {
	// If the number is negative, return false
	if (num < 0) {
		return false;
	}

	// Store the original number for comparison
	const original = num;
	let rev = 0;

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
