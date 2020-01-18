const toSentence = words => words.join(" ") + ".";
const isArray = mixed => Array.isArray(mixed);
const userName = "John";

const lib = words => toSentence(words);

console.log(lib(["test", "test2"]));
