// Loops 02

// Given an array, return the largest number present in the array.

// Input: arr = [5, 0, 7, 10, 8, 17, 1];
// Output: 17

const findLargest = (arr) => {
	let largest = arr[0]; // or let largest = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}

	return largest;
};

const arr = [5, 0, 7, -10, -8, 17, 1];

const ans = findLargest(arr);
console.log("ans:", ans);
