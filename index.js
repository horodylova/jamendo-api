import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/tracks", async (req, res) => {
  const { genre } = req.body;  

  if (!genre) {
    return res.status(400).json({ success: false, message: "Genre is required" });
  }

  try {
    const response = await axios.get("https://api.jamendo.com/v3.0/tracks", {
      params: {
        client_id: process.env.CLIENT_ID,  
        limit: 20,  
        tags: genre,  
        format: "json",
      },
    });

    const tracks = response.data.results.map(track => ({
      name: track.name,
      artist: track.artist_name,
    }));

    res.json({ success: true, tracks });
  } catch (error) {
    console.error("Error fetching tracks:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tracks",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
