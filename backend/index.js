const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/news', async (req, res) => {
  try {
    const category = req.query.category || 'general';
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&category=${category}&apiKey=${process.env.VITE_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("News fetch error:", error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// ✅ DO NOT use app.listen()
// ❗ Vercel requires exporting the app instead:
module.exports = app;
