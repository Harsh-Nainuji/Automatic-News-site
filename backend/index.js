import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY;

app.get('/news', async (req, res) => {
  const { country = 'us', category = 'general' } = req.query;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=8&apiKey=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
