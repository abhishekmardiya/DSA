// Loops 02

// Given an array, return the smallest number present in the array.

// Input: arr = [5, 0, 7, -10, -8, 17, 1];
// Output: -10

const findSmallest = (arr) => {
	let smallest = arr[0]; // or let smallest = Infinity;

	// Starting the loop from i = 1 (instead of 0) after initializing smallest = arr[0] to avoid the redundant first comparison.
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}

	return smallest;
};

const arr = [5, 0, 7, -10, -8, 17, 1];

const ans = findSmallest(arr);
console.log("ans:", ans);

export { findSmallest };

// Time complexity: O(n)
// Space complexity: O(1)
