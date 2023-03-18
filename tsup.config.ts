import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	target: "esnext",
	outDir: "lib",
	format: ["cjs", "esm"],
	minify: true,
	keepNames: true,
	dts: true,
	splitting: true,
	clean: true,
});
