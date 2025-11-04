// Given an array of numbers, count how many values are negative. A negative value is any number less than zero. Return the total count of negative numbers present in the array. If the array has no negative values, return zero.

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
