const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Menjadikan folder "public" sebagai static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routing default ke index.html di folder public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
