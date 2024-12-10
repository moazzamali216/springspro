const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const passwordHash = bcrypt.hashSync('yourpassword', 10);

module.exports = async (req, res) => {
  const { password } = req.query;

  if (bcrypt.compareSync(password, passwordHash)) {
    const filePath = path.join(__dirname, 'data', 'data.xlsx');

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('File not found');
    }
  } else {
    res.status(403).send('Forbidden: Invalid password');
  }
};
