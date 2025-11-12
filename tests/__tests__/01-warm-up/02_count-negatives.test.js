import { describe, expect, it } from "vitest";
import { countNegatives } from "../../../src/01-warm-up/02_count-negatives.js";

describe("countNegatives", () => {
	it("should return the correct count of negative numbers", () => {
		const arr = [2, -9, 17, -12, 1, -10, -4, 8, -Infinity];
		expect(countNegatives(arr)).toBe(5);
	});

	it("should return 0 when array has no negative numbers", () => {
		const arr = [2, 9, 17, 12, 1, 10, 4, 8];
		expect(countNegatives(arr)).toBe(0);
	});

	it("should return 0 when array has only positive numbers and zero", () => {
		const arr = [0, 1, 2, 3, 4];
		expect(countNegatives(arr)).toBe(0);
	});

	it("should handle array with all negative numbers", () => {
		const arr = [-1, -2, -3, -4, -5];
		expect(countNegatives(arr)).toBe(5);
	});

	it("should handle empty array", () => {
		const arr = [];
		expect(countNegatives(arr)).toBe(0);
	});

	it("should handle array with single negative element", () => {
		const arr = [-5];
		expect(countNegatives(arr)).toBe(1);
	});

	it("should handle array with single positive element", () => {
		const arr = [5];
		expect(countNegatives(arr)).toBe(0);
	});

	it("should handle array with zero", () => {
		const arr = [0, -1, -2, 3, -4];
		expect(countNegatives(arr)).toBe(3);
	});

	it("should handle -Infinity as negative", () => {
		const arr = [-Infinity, -1, 0, 1];
		expect(countNegatives(arr)).toBe(2);
	});

	it("should handle mixed positive and negative numbers", () => {
		const arr = [-1, 2, -3, 4, -5, 6];
		expect(countNegatives(arr)).toBe(3);
	});
});
