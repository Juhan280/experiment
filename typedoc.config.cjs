/** @type {import("typedoc").TypeDocOptions} */
module.exports = {
	entryPoints: ["src/index.ts"],
	plugin: ["typedoc-plugin-zod"],
	includes: "./Examples",
};