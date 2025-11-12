import { describe, expect, it } from "vitest";
import { generatePattern } from "../../../src/01-warm-up/10_number-pattern-03.js";

describe("generatePattern - Number Pattern 03", () => {
	it("should generate correct pattern for n=5", () => {
		const n = 5;
		const result = generatePattern(n);
		const expected = ["1 2 3 4 5", "1 2 3 4", "1 2 3", "1 2", "1"];
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
		const expected = ["1 2 3", "1 2", "1"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=4", () => {
		const n = 4;
		const result = generatePattern(n);
		const expected = ["1 2 3 4", "1 2 3", "1 2", "1"];
		expect(result).toEqual(expected);
	});

	it("should return array with n rows", () => {
		const n = 5;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
	});

	it("should have decreasing number of numbers in each row", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row, index) => {
			const numberCount = row.split(" ").length;
			expect(numberCount).toBe(n - index);
		});
	});

	it("should start each row with 1", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row) => {
			expect(row.startsWith("1")).toBe(true);
		});
	});
});
