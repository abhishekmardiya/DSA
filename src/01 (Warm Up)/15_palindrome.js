// Palindrome

// Given an integer, determine if it is a palindrome.

// `Palindrome`: A palindrome is a number that reads the same backward as forward.

// Input: 121
// Output: true

// Test Cases:
// Input: -121 --> output: false (because "-121" !== "121-")
// Input: 259 --> output: false

// Approach:
// 1. If the number is negative, return false (negative numbers aren't palindromes).
// 2. Initialize a variable to store the reversed number.
// 3. Extract each digit from the end using modulo 10.
// 4. Append the digit to the reversed number by multiplying current reversed by 10 and adding the digit.
// 5. To process the next digit, remove the last digit from the current number by dividing by 10 and using Math.floor for integer division.
// 6. After processing all digits, compare the reversed number with the original. If equal, it's a palindrome.

const isPalindrome = (num) => {
	// If the number is negative, return false
	if (num < 0) {
		return false;
	}

	// Store the original number for comparison
	const original = num;
	let rev = 0;

	while (num > 0) {
		const rem = num % 10;
		rev = rev * 10 + rem;
		num = Math.floor(num / 10);
	}

	if (rev === original) {
		return true;
	} else {
		return false;
	}
};

const num = 121;

const ans = isPalindrome(num);
console.log("ans:", ans);

// Time complexity: O(log n)
// Space complexity: O(1)
