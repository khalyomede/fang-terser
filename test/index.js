import { expect } from "chai";
import yourLib from "../lib";

describe("yourLib", () => {
	it("should export a function", () =>
		expect(yourLib).to.be.instanceOf(Function));
});
