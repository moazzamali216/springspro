const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const formData = [];

// Function to save data to an Excel file
function saveDataToExcel() {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(formData);
  XLSX.utils.book_append_sheet(wb, ws, 'Form Data');

  const dataDirectory = path.join(__dirname, 'data');

  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
  }

  const filePath = path.join(dataDirectory, 'data.xlsx');

  try {
    XLSX.writeFile(wb, filePath);
    console.log('Excel file created/updated successfully at', filePath);
  } catch (error) {
    console.error('Error writing Excel file:', error);
  }
}

// POST request handler
module.exports = async (req, res) => {
  // Parse JSON body
  bodyParser.json()(req, res, () => {
    const data = req.body;
    formData.push(data); // Store the form data

    saveDataToExcel(); // Save to Excel

    res.status(200).json({ message: 'Data submitted successfully' });
  });
};
