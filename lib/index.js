'use strict';

var terser = require('terser');

var index = (function (options) { return function (files) {
    return files.map(function (file) {
        var fileContent = file.content.toString();
        var _a = terser.minify(fileContent, options), code = _a.code, error = _a.error, warnings = _a.warnings;
        if (error instanceof Error) {
            throw error;
        }
        if (Array.isArray(warnings) && warnings.length > 0) {
            for (var _i = 0, warnings_1 = warnings; _i < warnings_1.length; _i++) {
                var warning = warnings_1[_i];
                console.warn(warning);
            }
        }
        if (typeof code === "string") {
            file.content = Buffer.from(code);
        }
        return file;
    });
}; });

module.exports = index;
