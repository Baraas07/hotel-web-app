const express = require("express");
const app = express();

app.use(express.static(__dirname));

// صفحة تعرض معلومات المستخدم من Headers (Easy Auth)
app.get("/me", (req, res) => {
  // Easy Auth يحقن JSON base64 في هيدر اسمه X-MS-CLIENT-PRINCIPAL
  const principal = req.headers["x-ms-client-principal"];

  if (!principal) {
    return res.status(401).send("Not authenticated (no principal header).");
  }

  const decoded = Buffer.from(principal, "base64").toString("utf8");
  const user = JSON.parse(decoded);

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(user, null, 2));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on port", PORT));
