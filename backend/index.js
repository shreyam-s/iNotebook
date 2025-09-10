const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

// ✅ Connect to MongoDB Atlas
connectToMongo();

const app = express();
const port = process.env.PORT || 4000;

// ✅ CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// ✅ 404 fallback for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
