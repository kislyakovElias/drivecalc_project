
const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());
app.use(express.json()); // next()

const dataRouter = require("./routes/data");
app.use("/api/data", dataRouter); // next()

// const tripsRouter = require("./routes/trips");
// app.use("/api/trips", tripsRouter); // next()

app.use(express.static(path.join(__dirname, "public"))); // next()



app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
