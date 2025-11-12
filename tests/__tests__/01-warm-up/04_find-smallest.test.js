import { describe, expect, it } from "vitest";
import { findSmallest } from "../../../src/01 (Warm Up)/04_find-smallest.js";

describe("findSmallest", () => {
	it("should return the smallest number in the array", () => {
		const arr = [5, 0, 7, -10, -8, 17, 1];
		expect(findSmallest(arr)).toBe(-10);
	});

	it("should handle array with all positive numbers", () => {
		const arr = [5, 2, 10, 1, 8];
		expect(findSmallest(arr)).toBe(1);
	});

	it("should handle array with all negative numbers", () => {
		const arr = [-5, -2, -10, -1, -8];
		expect(findSmallest(arr)).toBe(-10);
	});

	it("should handle array with mixed positive and negative numbers", () => {
		const arr = [-10, -5, 0, 5, 10];
		expect(findSmallest(arr)).toBe(-10);
	});

	it("should handle array with single element", () => {
		const arr = [42];
		expect(findSmallest(arr)).toBe(42);
	});

	it("should handle array with duplicate smallest values", () => {
		const arr = [5, -10, -10, 3, -10];
		expect(findSmallest(arr)).toBe(-10);
	});

	it("should handle array with zero", () => {
		const arr = [5, 2, 0, 1, 8];
		expect(findSmallest(arr)).toBe(0);
	});

	it("should handle array with all zeros", () => {
		const arr = [0, 0, 0, 0];
		expect(findSmallest(arr)).toBe(0);
	});

	it("should handle array with large numbers", () => {
		const arr = [1000, 999, 1001, 500];
		expect(findSmallest(arr)).toBe(500);
	});

	it("should handle array starting with smallest number", () => {
		const arr = [-100, -50, 25, 10];
		expect(findSmallest(arr)).toBe(-100);
	});
});
