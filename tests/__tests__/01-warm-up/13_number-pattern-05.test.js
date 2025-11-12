import { describe, expect, it } from "vitest";
import { generatePattern } from "../../../src/01-warm-up/13_number-pattern-05.js";

describe("generatePattern - Number Pattern 05", () => {
	it("should generate correct pattern for n=5", () => {
		const n = 5;
		const result = generatePattern(n);
		const expected = [" 1", " 0 1", " 0 1 0", " 1 0 1 0", " 1 0 1 0 1"];
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
		const expected = [" 1", " 0 1", " 0 1 0"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=4", () => {
		const n = 4;
		const result = generatePattern(n);
		const expected = [" 1", " 0 1", " 0 1 0", " 1 0 1 0"];
		expect(result).toEqual(expected);
	});

	it("should return array with n rows", () => {
		const n = 5;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
	});

	it("should have alternating 1 and 0 pattern with continuous sequence", () => {
		const n = 5;
		const result = generatePattern(n);
		// The pattern should continue the sequence from previous row
		// Row 1: 1
		// Row 2: 0 1
		// Row 3: 0 1 0
		// Row 4: 1 0 1 0
		// Row 5: 1 0 1 0 1
		const expected = [" 1", " 0 1", " 0 1 0", " 1 0 1 0", " 1 0 1 0 1"];
		expect(result).toEqual(expected);
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
