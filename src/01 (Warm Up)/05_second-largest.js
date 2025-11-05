// Second Largest

// Given an array, find and return the second largest value in the array.

const findSecondLargest = (arr) => {
	let firstLargest = -Infinity;
	let secondLargest = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > firstLargest) {
			secondLargest = firstLargest;
			firstLargest = arr[i];
		} else if (arr[i] > secondLargest) {
			secondLargest = arr[i];
		}
	}

	return secondLargest;
};

const arr = [4, 9, 0, 12, 10, 8, 7, 1];

const ans = findSecondLargest(arr);
console.log("ans:", ans);

// Time complexity: O(n)
// Space complexity: O(1)
