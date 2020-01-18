// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const terser = require("../lib");

const js = {
	name: "Javascript",
	input: "example/code.js",
	tasks: [
		terser({
			compress: {
				passes: 5,
				unsafe: true,
				pure_getters: true,
			},
			toplevel: true,
		}),
		save({
			folder: "example/dist/js",
		}),
	],
};

const main = async () => await run([js]);

main();
