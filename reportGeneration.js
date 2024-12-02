import fs from 'fs';  // For writing files

class ReportGenerator {
    // Method to finalize the report and create a simple HTML report
    async finalizeReport() {
        // Create a basic HTML structure for the report
        const reportContent = `
      <html>
        <head><title>Test Report</title></head>
        <body>
          <h1>Test Execution Report</h1>
          <p><strong>Status:</strong> Test Suite Finished</p>
          <p><strong>Result:</strong> ${global.testStatus}</p>
        </body>
      </html>
    `;

        // Save this content to a file
        const filePath = './report/testReport.html';

        // Create the report directory if it doesn't exist
        if (!fs.existsSync('./report')) {
            fs.mkdirSync('./report');
        }

        // Write the report content to the file
        fs.writeFileSync(filePath, reportContent);

        console.log(`Report generated at: ${filePath}`);
    }
}

export default new ReportGenerator()
