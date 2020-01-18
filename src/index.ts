import { IFile } from "@fang/core/lib/interface";
import { minify, MinifyOptions } from "terser";

export default (options: MinifyOptions) => (
	files: Array<IFile>
): Array<IFile> => {
	return files.map(file => {
		const fileContent = file.content.toString();
		const { code, error, warnings } = minify(fileContent, options);

		if (error instanceof Error) {
			throw error;
		}

		if (Array.isArray(warnings) && warnings.length > 0) {
			for (const warning of warnings) {
				console.warn(warning);
			}
		}

		if (typeof code === "string") {
			file.content = Buffer.from(code);
		}

		return file;
	});
};
