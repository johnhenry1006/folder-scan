const path = require("path");
const { scanFolder } = require("../services/file-scanner.service");
const { exportToExcel } = require("../services/excel-exporter.service");
const { getTimestamp } = require("../utils/time.util");

async function run(folderPath) {
    if (!folderPath) {
        console.error("❌ Please provide folder path");
        return;
    }

    const absolutePath = path.resolve(folderPath);

    console.log("🔍 Scanning folder...");
    const files = scanFolder(absolutePath);

    console.log(`📂 Found ${files.length} files`);

    // ✅ Tạo file name theo timestamp
    const fileName = `scan_${getTimestamp()}.xlsx`;

    const output = path.join(process.cwd(), fileName);

    await exportToExcel(files, output);
}

module.exports = { run };
