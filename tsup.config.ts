import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	target: "esnext",
	format: ["cjs", "esm"],
	minify: true,
	keepNames: true,
	dts: true,
	clean: true,
});
