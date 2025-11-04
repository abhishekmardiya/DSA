// Loops 02

// Given an array and a target value, return the index where the target appears in the array. If the target does not exist in the array, return -1.

// Input: arr = [4,2,0,10,8,30], target = 8
// Output: 4

const getTargetElementIndex = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}

	return -1;
};

const arr = [4, 2, 0, 10, 8, 30];
const target = 30;

const ans = getTargetElementIndex(arr, target);
console.log("ans:", ans);
