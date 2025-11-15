// Second Largest

// Given an array, find and return the second largest value in the array.

// Input: arr = [4, 9, 12, 0, 12, 10, 8, 7, 1];
// Output: 10

const findSecondLargest = (arr) => {
	let firstLargest = -Infinity;
	let secondLargest = -Infinity;

	if (arr.length < 2) {
		return "Array should have at least 2 elements";
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > firstLargest) {
			secondLargest = firstLargest;
			firstLargest = arr[i];
			// arr[i] !== firstLargest --> Handle duplicate elements - without this check, result would be 12
		} else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
			secondLargest = arr[i];
		}
	}

	if (secondLargest === -Infinity) {
		return "No second largest element found (all elements are the same)";
	}

	return secondLargest;
};

const arr = [4, 9, 12, 0, 12, 10, 8, 7, 1];

const ans = findSecondLargest(arr);
console.log("ans:", ans);

export { findSecondLargest };

// Time complexity: O(n)
// Space complexity: O(1)

/*
Que. 
Why not simply sort the array and take the second last element?
const ans = [...new Set(arr)]?.sort((a, b) => b - a)[1]; // Set is for remove the duplicates

Ans. 
Sorting with `.sort()` works, but it's less efficient.
`.sort()` is O(n log n), while the single pass solution is O(n).


Time complexity: O(n log n) -->  creating set and sorting
Space complexity: O(n) --> creating a new array copy
*/
