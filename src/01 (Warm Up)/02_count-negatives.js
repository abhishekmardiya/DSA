// Loops 02

// Given an array, return the total number of negative elements in the array. If the array contains no negative values, return 0.

// Input: arr = [2, -9, 17, -12, 1, -10, -4, 8, -Infinity]
// Output: 5

const countNegatives = (arr) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			count++;
		}
	}

	return count;
};

const arr = [2, -9, 17, -12, 1, -10, -4, 8, -Infinity];

const ans = countNegatives(arr);
console.log("ans:", ans);

// Time complexity: O(n)
// Space complexity: O(1)
