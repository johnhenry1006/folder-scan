const fs = require("fs");
const path = require("path");

function scanFolder(dirPath, basePath = dirPath, result = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanFolder(fullPath, basePath, result);
        } else {
            const relativePath = path.relative(basePath, fullPath);
            const subFolder = path.dirname(relativePath);

            result.push({
                subFolder: subFolder === "." ? "" : subFolder,
                fileName: path.basename(file),
                extension: path.extname(file).replace(".", ""),
            });
        }
    });

    return result;
}

module.exports = { scanFolder };
