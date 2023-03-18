import { z } from "zod";
export { version } from "../package.json";
export * from "./sum";

const emailSchema = z.string().email();
export type Email = z.infer<typeof emailSchema>;

export function isValidEmail(email: string): email is Email {
	return emailSchema.safeParse(email).success;
}

export function sendEmail(email: Email) {
	emailSchema.parse(email);
	return true;
}
