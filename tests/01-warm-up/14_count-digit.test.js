import { describe, expect, it } from "vitest";
import { countDigit } from "../../src/01-warm-up/14_count-digit.js";

describe("countDigit", () => {
	it("should return 3 for number 259", () => {
		expect(countDigit(259)).toBe(3);
	});

	it("should return 1 for number 0", () => {
		expect(countDigit(0)).toBe(1);
	});

	it("should return 3 for negative number -259", () => {
		expect(countDigit(-259)).toBe(3);
	});

	it("should return 1 for single digit positive number", () => {
		expect(countDigit(5)).toBe(1);
	});

	it("should return 1 for single digit negative number", () => {
		expect(countDigit(-5)).toBe(1);
	});

	it("should return 2 for two digit number", () => {
		expect(countDigit(42)).toBe(2);
	});

	it("should return 4 for four digit number", () => {
		expect(countDigit(1234)).toBe(4);
	});

	it("should return correct count for large number", () => {
		expect(countDigit(123456789)).toBe(9);
	});

	it("should handle negative large number", () => {
		expect(countDigit(-123456789)).toBe(9);
	});

	it("should return 1 for zero", () => {
		expect(countDigit(0)).toBe(1);
	});

	it("should handle number with trailing zeros", () => {
		expect(countDigit(1000)).toBe(4);
	});

	it("should handle negative number with trailing zeros", () => {
		expect(countDigit(-1000)).toBe(4);
	});
});
