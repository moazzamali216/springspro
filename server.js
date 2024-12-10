const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cors = require('cors');  // Import CORS package

const app = express();

// Set the port for both local and production environments
const port = process.env.PORT || 5000; // Local development uses port 5000, but Vercel/Heroku uses dynamic ports

// CORS setup: Allow frontend access for both local and production
// You can replace this with your actual frontend production URL later
const frontendOrigin = 'https://springspro.vercel.app/';  // Default to localhost:3000 for local, adjust in production
app.use(cors({
  origin: frontendOrigin, // Allow access from localhost or production frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory storage for form data (this can be replaced by a database)
let formData = [];

// The hashed password for accessing the data (use a hardcoded password for simplicity)
const passwordHash = bcrypt.hashSync('yourpassword', 10); // Replace 'yourpassword' with your actual password

// Directory to store the Excel file
const dataDirectory = path.join(__dirname, 'data'); // Path to 'data' folder

// Function to save form data to an Excel file
function saveDataToExcel() {
  const wb = XLSX.utils.book_new();  // Create a new workbook
  const ws = XLSX.utils.json_to_sheet(formData); // Convert form data to sheet format
  XLSX.utils.book_append_sheet(wb, ws, 'Form Data'); // Append sheet to workbook

  // Ensure the 'data' directory exists
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory); // Create 'data' directory if it doesn't exist
  }

  // Define the full path to the Excel file in the 'data' folder
  const filePath = path.join(dataDirectory, 'data.xlsx');

  try {
    XLSX.writeFile(wb, filePath);  // Write the Excel file
    console.log('Excel file created/updated successfully at', filePath);
  } catch (error) {
    console.error('Error writing Excel file:', error);
  }
}

// POST route to handle form submissions
app.post('/api/submit', (req, res) => {
  const data = req.body;  // Get the form data
  formData.push(data);  // Add the new data to the in-memory array

  // Save the updated data to Excel file
  saveDataToExcel();

  res.status(200).json({ message: 'Data submitted successfully' });
});

// GET route to serve the Excel file with password protection
app.get('/data', (req, res) => {
  const { password } = req.query;  // Get the password from the query string

  // Check if the password is correct
  if (bcrypt.compareSync(password, passwordHash)) {
    const filePath = path.join(dataDirectory, 'data.xlsx');  // Path to the Excel file in 'data' folder

    // Check if the file exists before attempting to serve it
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);  // Send the Excel file to the client
    } else {
      res.status(404).send('File not found');  // If the file doesn't exist
    }
  } else {
    res.status(403).send('Forbidden: Invalid password');  // If password is incorrect
  }
});

// Start the server (use the dynamic port for production)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
