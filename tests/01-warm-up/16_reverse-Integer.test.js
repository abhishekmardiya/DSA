import { describe, expect, it } from "vitest";
import { reverseInteger } from "../../src/01-warm-up/16_reverse-Integer.js";

describe("reverseInteger", () => {
	it("should reverse positive number 123 to 321", () => {
		expect(reverseInteger(123)).toBe(321);
	});

	it("should reverse negative number -123 to -321", () => {
		expect(reverseInteger(-123)).toBe(-321);
	});

	it("should reverse 120 to 21 (removing trailing zero)", () => {
		expect(reverseInteger(120)).toBe(21);
	});

	it("should return 0 for single digit positive number", () => {
		expect(reverseInteger(5)).toBe(5);
	});

	it("should return negative single digit for negative input", () => {
		expect(reverseInteger(-5)).toBe(-5);
	});

	it("should return 0 for zero", () => {
		expect(reverseInteger(0)).toBe(0);
	});

	it("should reverse two digit number", () => {
		expect(reverseInteger(12)).toBe(21);
	});

	it("should reverse negative two digit number", () => {
		expect(reverseInteger(-12)).toBe(-21);
	});

	it("should reverse large positive number", () => {
		expect(reverseInteger(123456789)).toBe(987654321);
	});

	it("should reverse large negative number", () => {
		expect(reverseInteger(-123456789)).toBe(-987654321);
	});

	it("should return 0 when reversed number exceeds 32-bit integer range (positive)", () => {
		expect(reverseInteger(2147483647)).toBe(0);
	});

	it("should return 0 when reversed number exceeds 32-bit integer range (negative)", () => {
		expect(reverseInteger(-2147483648)).toBe(0);
	});

	it("should handle number with trailing zeros", () => {
		expect(reverseInteger(100)).toBe(1);
	});

	it("should handle negative number with trailing zeros", () => {
		expect(reverseInteger(-100)).toBe(-1);
	});
});

