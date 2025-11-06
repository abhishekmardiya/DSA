// Second Largest

// Given an array, find and return the second largest value in the array.

// Input: arr = [4, 9, 12, 0, 12, 10, 8, 7, 1];
// Output: 10

const findSecondLargest = (arr) => {
	let firstLargest = -Infinity;
	let secondLargest = -Infinity;

	if (arr.length < 2) {
		return "Array should have atleast 2 elements";
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

	return secondLargest;
};

const arr = [4, 9, 12, 0, 12, 10, 8, 7, 1];

const ans = findSecondLargest(arr);
console.log("ans:", ans);

// Time complexity: O(n)
// Space complexity: O(1)
