import { describe, expect, it } from "vitest";
import { isPalindrome } from "../../src/01-warm-up/15A_palindrome-optimized-solution.js";

describe("isPalindrome (Optimized)", () => {
	it("should return true for palindrome number 121", () => {
		expect(isPalindrome(121)).toBe(true);
	});

	it("should return false for negative number -121", () => {
		expect(isPalindrome(-121)).toBe(false);
	});

	it("should return false for non-palindrome number 259", () => {
		expect(isPalindrome(259)).toBe(false);
	});

	it("should return true for single digit number", () => {
		expect(isPalindrome(5)).toBe(true);
	});

	it("should return true for two digit palindrome", () => {
		expect(isPalindrome(11)).toBe(true);
	});

	it("should return false for two digit non-palindrome", () => {
		expect(isPalindrome(12)).toBe(false);
	});

	it("should return true for palindrome with even digits", () => {
		expect(isPalindrome(1221)).toBe(true);
	});

	it("should return true for palindrome with odd digits", () => {
		expect(isPalindrome(12321)).toBe(true);
	});

	it("should return false for non-palindrome with even digits", () => {
		expect(isPalindrome(1234)).toBe(false);
	});

	it("should return false for non-palindrome with odd digits", () => {
		expect(isPalindrome(12345)).toBe(false);
	});

	it("should return true for zero", () => {
		expect(isPalindrome(0)).toBe(true);
	});

	it("should return true for large palindrome", () => {
		expect(isPalindrome(1234321)).toBe(true);
	});

	it("should return false for large non-palindrome", () => {
		expect(isPalindrome(1234567)).toBe(false);
	});

	it("should return true for palindrome with all same digits", () => {
		expect(isPalindrome(9999)).toBe(true);
	});

	it("should return true for palindrome with even number of digits (123321)", () => {
		expect(isPalindrome(123321)).toBe(true);
	});

	it("should return false for number ending with zero (1210)", () => {
		expect(isPalindrome(1210)).toBe(false);
	});

	it("should return false for number ending with zero (10)", () => {
		expect(isPalindrome(10)).toBe(false);
	});

	it("should return false for number ending with zero (100)", () => {
		expect(isPalindrome(100)).toBe(false);
	});

	it("should return false for number ending with zero (1230)", () => {
		expect(isPalindrome(1230)).toBe(false);
	});
});

