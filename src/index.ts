import { z } from "zod";
export { version } from "../package.json";
export * from "./math";
export * from "./utils";

const emailSchema = z.string().email();
export type Email = z.infer<typeof emailSchema>;

/**
 * Determines whether a given string is a valid email address.
 *
 * @param email The string to validate.
 *
 * @returns `true` if the input is a valid email address, `false` otherwise.
 */
export function isValidEmail(email: string): email is Email {
	return emailSchema.safeParse(email).success;
}
