import { describe, expect, it } from "vitest";
import { generatePattern } from "../../../src/01 (Warm Up)/06_star-pattern-01.js";

describe("generatePattern - Star Pattern 01", () => {
	it("should generate correct pattern for n=4", () => {
		const n = 4;
		const result = generatePattern(n);
		const expected = ["* * * *", "* * * *", "* * * *", "* * * *"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=1", () => {
		const n = 1;
		const result = generatePattern(n);
		const expected = ["*"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=3", () => {
		const n = 3;
		const result = generatePattern(n);
		const expected = ["* * *", "* * *", "* * *"];
		expect(result).toEqual(expected);
	});

	it("should generate correct pattern for n=5", () => {
		const n = 5;
		const result = generatePattern(n);
		const expected = [
			"* * * * *",
			"* * * * *",
			"* * * * *",
			"* * * * *",
			"* * * * *",
		];
		expect(result).toEqual(expected);
	});

	it("should return array with n rows", () => {
		const n = 4;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
	});

	it("should return array where each row has n stars", () => {
		const n = 4;
		const result = generatePattern(n);
		result.forEach((row) => {
			const starCount = (row.match(/\*/g) || []).length;
			expect(starCount).toBe(n);
		});
	});
});
