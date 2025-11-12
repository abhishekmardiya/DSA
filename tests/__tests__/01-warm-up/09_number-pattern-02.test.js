import { describe, expect, it } from "vitest";
import { generatePattern } from "../../../src/01 (Warm Up)/09_number-pattern-02.js";

describe("generatePattern - Number Pattern 02", () => {
	it("should generate correct pattern for n=5", () => {
		const n = 5;
		const result = generatePattern(n);
		const expected = ["1", "2 2", "3 3 3", "4 4 4 4", "5 5 5 5 5"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=1", () => {
		const n = 1;
		const result = generatePattern(n);
		const expected = ["1"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=3", () => {
		const n = 3;
		const result = generatePattern(n);
		const expected = ["1", "2 2", "3 3 3"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=4", () => {
		const n = 4;
		const result = generatePattern(n);
		const expected = ["1", "2 2", "3 3 3", "4 4 4 4"];
		expect(result).toEqual(expected);
	});

	it("should return array with n rows", () => {
		const n = 5;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
	});

	it("should have increasing number of numbers in each row", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row, index) => {
			const numberCount = row.split(" ").length;
			expect(numberCount).toBe(index + 1);
		});
	});

	it("should have same number repeated in each row", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row, index) => {
			const numbers = row.split(" ");
			const expectedNumber = String(index + 1);
			numbers.forEach((num) => {
				expect(num).toBe(expectedNumber);
			});
		});
	});
});
