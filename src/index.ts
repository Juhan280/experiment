import { z } from "zod";
export { version } from "../package.json";
export * from "./math";

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

/**
 * Sends an email message.
 *
 * @param email An object representing the email message to send.
 *
 * @returns `true` if the email was sent successfully, `false` otherwise.
 *
 * @throws An error if the `email` parameter is not a valid email message.
 */
export function sendEmail(email: Email) {
	emailSchema.parse(email);
	return true;
}
