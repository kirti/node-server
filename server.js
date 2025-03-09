require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy in-memory data storage
let items = [];
let idCounter = 1;

// 👉 Create Item (POST)
app.post("/api/items", (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// 👉 Read All Items (GET)
app.get("/api/items", (req, res) => {
  res.json(items);
});

// 👉 Read Single Item by ID (GET)
app.get("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// 👉 Update Item by ID (PUT)
app.put("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });

  const { name, description } = req.body;
  if (name) item.name = name;
  if (description) item.description = description;

  res.json(item);
});

// 👉 Delete Item by ID (DELETE)
app.delete("/api/items/:id", (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items.splice(index, 1);
  res.json({ message: "Item deleted successfully" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
