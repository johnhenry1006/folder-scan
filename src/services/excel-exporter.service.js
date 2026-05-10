const ExcelJS = require("exceljs");

async function exportToExcel(data, outputPath) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Files");

    worksheet.columns = [
        { header: "STT", key: "stt", width: 10 },
        { header: "Subfolder", key: "subFolder", width: 30 },
        { header: "Name File", key: "fileName", width: 40 },
        { header: "Loại File", key: "extension", width: 15 },
    ];

    data.forEach((item, index) => {
        worksheet.addRow({
            stt: index + 1,
            ...item,
        });
    });

    await workbook.xlsx.writeFile(outputPath);
    console.log(`✅ Exported: ${outputPath}`);
}

module.exports = { exportToExcel };
