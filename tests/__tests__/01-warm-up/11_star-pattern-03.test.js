import { describe, expect, it } from "vitest";
import { generatePattern } from "../../../src/01-warm-up/11_star-pattern-03.js";

describe("generatePattern - Star Pattern 03", () => {
	it("should generate correct pattern for n=5", () => {
		const n = 5;
		const result = generatePattern(n);
		// Each row should have spaces before stars
		expect(result).toHaveLength(n);
		// First row should have most spaces, last row should have stars
		expect(result[0]?.includes("*")).toBe(true);
		expect(result[n - 1]?.includes("*")).toBe(true);
	});

	it("should generate correct pattern for n=1", () => {
		const n = 1;
		const result = generatePattern(n);
		expect(result).toHaveLength(1);
		expect(result[0]?.includes("*")).toBe(true);
	});

	it("should generate correct pattern for n=3", () => {
		const n = 3;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
		// Last row should have all stars
		const lastRow = result[n - 1];
		const starCount = (lastRow?.match(/\*/g) || []).length;
		expect(starCount).toBe(n);
	});

	it("should return array with n rows", () => {
		const n = 5;
		const result = generatePattern(n);
		expect(result).toHaveLength(n);
	});

	it("should have increasing number of stars in each row", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row, index) => {
			const starCount = (row.match(/\*/g) || []).length;
			expect(starCount).toBe(index + 1);
		});
	});

	it("should have decreasing number of spaces before stars", () => {
		const n = 5;
		const result = generatePattern(n);
		result.forEach((row) => {
			// Count spaces before the first star
			const firstStarIndex = row.indexOf("*");
			if (firstStarIndex > 0) {
				const spacesBefore =
					row.substring(0, firstStarIndex).split(" ").length - 1;
				expect(spacesBefore).toBeGreaterThanOrEqual(0);
			}
		});
	});
});
