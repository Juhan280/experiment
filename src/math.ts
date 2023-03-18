import { z } from "zod";

const numberArraySchema = z.array(z.number()).min(2);
const positiveInteger = z.number().positive().int();
const nonnegativeInteger = z.number().nonnegative().int();

/**
 * Calculates the sum of a list of numbers.
 *
 * @param numbers An array of numbers to sum up. Must contain at least two numbers.
 *
 * @returns The sum of all the numbers in the array.
 *
 * @throws An error if the `numbers` parameter is not an array, or if it does not contain at least two numbers.
 */
export function sum(
	...numbers: [a: number, b: number, ...more: number[]]
): number {
	numberArraySchema.min(2).parse(numbers);
	return numbers.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Subtracts a list of numbers from a given number.
 *
 * @param from The initial number to subtract from.
 * @param numbers A list of numbers to subtract from the initial number.
 *
 * @returns The result of subtracting all the numbers from the initial number.
 *
 * @throws An error if the `from` parameter is not a valid number or if the `numbers` parameter is an empty array.
 *
 */
export function sub(
	from: number,
	...numbers: [x: number, ...more: number[]]
): number {
	z.number().parse(from);
	numberArraySchema.min(1).parse(numbers);
	return numbers.reduce((acc, cur) => acc - cur, from);
}

/**
 * Calculates the factorial of a given integer.
 *
 * @param n The integer to calculate the factorial of.
 *
 * @returns The factorial of `n`.
 *
 * @throws An error if `n` is negative or not an integer.
 */
export function factorial(n: number): number {
	nonnegativeInteger.parse(n);

	let result = 1;

	for (let i = 2; i <= n; i++) {
		result *= i;
	}

	return result;
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 *
 * @returns The greatest common divisor of `a` and `b`.
 *
 * @throws An error if either `a` or `b` is not a positive integer.
 */
export function gcd(a: number, b: number): number {
	nonnegativeInteger.parse(a);
	nonnegativeInteger.parse(b);

	while (b !== 0) {
		const temp = b;
		b = a % b;
		a = temp;
	}

	return a;
}

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 *
 * @returns The least common multiple of `a` and `b`.
 *
 * @throws An error if either `a` or `b` is not a positive integer.
 */
export function lcm(a: number, b: number): number {
	positiveInteger.parse(a);
	positiveInteger.parse(b);

	return (a * b) / gcd(a, b);
}

/**
 * Calculates the nth Fibonacci number.
 *
 * @param n The index of the Fibonacci number to calculate. Must be a non-negative integer.
 *
 * @returns The nth Fibonacci number.
 *
 * @throws An error if `n` is not a non-negative integer.
 */
export function fibonacci(n: number): number {
	nonnegativeInteger.parse(n);

	let a = 0;
	let b = 1;

	for (let i = 0; i < n; i++) {
		const temp = b;
		b = a + b;
		a = temp;
	}

	return a;
}
