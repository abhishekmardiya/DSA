import { describe, expect, it } from "vitest";
import { generatePattern } from "../../../src/01 (Warm Up)/12_number-pattern-04.js";

describe("generatePattern - Number Pattern 04", () => {
	it("should generate correct pattern for n=5", () => {
		const n = 5;
		const result = generatePattern(n);
		const expected = [" 1", " 1 0", " 1 0 1", " 1 0 1 0", " 1 0 1 0 1"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=1", () => {
		const n = 1;
		const result = generatePattern(n);
		const expected = [" 1"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=3", () => {
		const n = 3;
		const result = generatePattern(n);
		const expected = [" 1", " 1 0", " 1 0 1"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=4", () => {
		const n = 4;
		const result = generatePattern(n);
		const expected = [" 1", " 1 0", " 1 0 1", " 1 0 1 0"];
		expect(result).toEqual(expected);
	});

	it("should return array with n rows", () => {
		const n = 5;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
	});

	it("should have alternating 1 and 0 pattern starting with 1", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row) => {
			const numbers = row.trim().split(" ");
			numbers.forEach((num, colIndex) => {
				const expected = colIndex % 2 === 0 ? "1" : "0";
				expect(num).toBe(expected);
			});
		});
	});

	it("should have increasing number of digits in each row", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row, index) => {
			const digitCount = row.trim().split(" ").length;
			expect(digitCount).toBe(index + 1);
		});
	});
});
