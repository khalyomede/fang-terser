// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const terser = require("../lib");

const js = {
	name: "Javascript",
	input: "example/code.js",
	tasks: [
		terser(),
		save({
			folder: "example/dist/js",
		}),
	],
};

const main = async () => await run([js]);

main();
