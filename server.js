import express from "express";
import open from "open";
import { exec } from "child_process";

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  console.log("✅ Received GET /test");
  res.send("OK FROM LAPTOP");
});

// Main share route
app.post("/share", (req, res) => {
  console.log("✅ Received POST /share");
  console.log("Raw body:", req.body);

  const { url, switchAudio } = req.body || {};

  if (!url) {
    console.log("❌ No URL in body");
    return res.status(400).send("Missing 'url'");
  }

  console.log("🎬 Opening video:", url);
  open(url).catch((err) => console.error("Error opening URL:", err));

  if (switchAudio) {
    console.log("🎧 Running bluetooth.sh...");
    exec("sh bluetooth.sh", (err, stdout, stderr) => {
      if (err) return console.error(err);
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
    });
  }

  res.send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on http://0.0.0.0:${PORT}`);
});

