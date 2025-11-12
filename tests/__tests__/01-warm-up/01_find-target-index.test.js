import { describe, expect, it } from "vitest";
import { getTargetElementIndex } from "../../../src/01-warm-up/01_find-target-index.js";

describe("getTargetElementIndex", () => {
	it("should return the index when target is found in the array", () => {
		const arr = [4, 2, 0, 10, 8, 30];
		const target = 8;
		expect(getTargetElementIndex(arr, target)).toBe(4);
	});

	it("should return 0 when target is the first element", () => {
		const arr = [4, 2, 0, 10, 8, 30];
		const target = 4;
		expect(getTargetElementIndex(arr, target)).toBe(0);
	});

	it("should return the last index when target is the last element", () => {
		const arr = [4, 2, 0, 10, 8, 30];
		const target = 30;
		expect(getTargetElementIndex(arr, target)).toBe(5);
	});

	it("should return -1 when target is not found in the array", () => {
		const arr = [4, 2, 0, 10, 8, 30];
		const target = 100;
		expect(getTargetElementIndex(arr, target)).toBe(-1);
	});

	it("should return the first occurrence index when target appears multiple times", () => {
		const arr = [4, 2, 0, 10, 8, 30, 8];
		const target = 8;
		expect(getTargetElementIndex(arr, target)).toBe(4);
	});

	it("should handle empty array", () => {
		const arr = [];
		const target = 8;
		expect(getTargetElementIndex(arr, target)).toBe(-1);
	});

	it("should handle array with single element when target matches", () => {
		const arr = [5];
		const target = 5;
		expect(getTargetElementIndex(arr, target)).toBe(0);
	});

	it("should handle array with single element when target does not match", () => {
		const arr = [5];
		const target = 10;
		expect(getTargetElementIndex(arr, target)).toBe(-1);
	});

	it("should handle negative numbers", () => {
		const arr = [-4, -2, 0, 10, -8, 30];
		const target = -8;
		expect(getTargetElementIndex(arr, target)).toBe(4);
	});

	it("should handle zero as target", () => {
		const arr = [4, 2, 0, 10, 8, 30];
		const target = 0;
		expect(getTargetElementIndex(arr, target)).toBe(2);
	});
});
