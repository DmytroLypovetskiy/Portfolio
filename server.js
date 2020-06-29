const path = require('path');
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname)));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));