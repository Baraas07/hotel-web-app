const express = require('express');
const app = express();

// Serve static files (HTML)
app.use(express.static(__dirname));

// Azure يوفر PORT تلقائيًا
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
