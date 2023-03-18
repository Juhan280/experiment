import { z } from "zod";

const sumParamSchema = z.array(z.number()).min(2);

export function sum(...numbers: [a: number, b: number, ...more: number[]]) {
	sumParamSchema.parse(numbers);
	return numbers.reduce((acc, cur) => acc + cur, 0);
}
