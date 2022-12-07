
const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const express = require("express");
const cors = require("cors");
const app = express();

const dataRouter = require("./routes/data");

app.use(express.json()); // next()
app.use(express.static(path.join(__dirname, "public"))); // next()
app.use(cors());


app.use("/api/data", dataRouter); // next()

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
