// Loops 02

// Given an array, return the smallest number present in the array.

// Input: arr = [5, 0, 7, 10, 8, 17, 1];
// Output: 17

const findSmallest = (arr) => {
	let smallest = arr[0]; // or let smallest = Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}

	return smallest;
};

const arr = [5, 0, 7, -10, -8, 17, 1];

const ans = findSmallest(arr);
console.log("ans:", ans);
