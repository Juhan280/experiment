import { z } from "zod";

/**
 * Generates a sequence of numbers within a specified range.
 *
 * @param start The inclusive start of the range.
 * @param end The exclusive end of the range. If it is not provided, then start is used as the exclusive end, and the sequence will start from 0.
 * @param step The step to increment the sequence by. If not provided, it defaults to 1.
 * @returns A generator yielding the next number in the sequence.
 * @throws If the start, end, or step arguments are not finite numbers.
 *
 * @example ```ts
 * for(const i of range(3)) console.log(i);
 * // 0, 1, 2
 * ```
 *
 * @example ```ts
 * for(const i of range(3, 5)) console.log(i);
 * // 3, 4
 * ```
 *
 * @example ```ts
 * for(const i of range(3, 8, 2)) console.log(i);
 * // 3, 5, 7
 * ```
 *
 * @example ```ts
 * for(const i of range(3, -8, 2)) console.log(i);
 * // 3, 1, -1, -3, -5, -7
 * ```
 */
export function* range(start: number, end?: number, step = 1) {
	z.number().finite().parse(start);
	z.number().finite().optional().parse(end);
	z.number().finite().parse(step);

	let _end: number;

	if (!end) {
		_end = start;
		start = 0;
	} else _end = end;

	const sign = start <= _end ? 1 : -1;
	step = Math.abs(step) * sign;

	for (let i = start; i * sign < _end * sign; i += step) yield i;
}
