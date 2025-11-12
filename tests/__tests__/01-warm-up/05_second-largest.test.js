import { describe, expect, it } from "vitest";
import { findSecondLargest } from "../../../src/01-warm-up/05_second-largest.js";

describe("findSecondLargest", () => {
	it("should return the second largest number in the array", () => {
		const arr = [4, 9, 12, 0, 12, 10, 8, 7, 1];
		expect(findSecondLargest(arr)).toBe(10);
	});

	it("should handle array with unique values", () => {
		const arr = [1, 2, 3, 4, 5];
		expect(findSecondLargest(arr)).toBe(4);
	});

	it("should handle array with duplicate largest values", () => {
		const arr = [5, 5, 3, 2, 1];
		expect(findSecondLargest(arr)).toBe(3);
	});

	it("should return error message when array has less than 2 elements", () => {
		const arr = [5];
		expect(findSecondLargest(arr)).toBe(
			"Array should have at least 2 elements",
		);
	});

	it("should return error message when array is empty", () => {
		const arr = [];
		expect(findSecondLargest(arr)).toBe(
			"Array should have at least 2 elements",
		);
	});

	it("should return error message when all elements are the same", () => {
		const arr = [5, 5, 5, 5];
		expect(findSecondLargest(arr)).toBe(
			"No second largest element found (all elements are the same)",
		);
	});

	it("should handle array with negative numbers", () => {
		const arr = [-5, -2, -10, -1, -8];
		expect(findSecondLargest(arr)).toBe(-2);
	});

	it("should handle array with mixed positive and negative numbers", () => {
		const arr = [-10, -5, 0, 5, 10];
		expect(findSecondLargest(arr)).toBe(5);
	});

	it("should handle array with two elements", () => {
		const arr = [10, 5];
		expect(findSecondLargest(arr)).toBe(5);
	});

	it("should handle array with multiple duplicates", () => {
		const arr = [10, 10, 8, 8, 5, 5];
		expect(findSecondLargest(arr)).toBe(8);
	});

	it("should handle array where second largest appears before largest", () => {
		const arr = [9, 12, 4, 0, 10];
		expect(findSecondLargest(arr)).toBe(10);
	});
});
