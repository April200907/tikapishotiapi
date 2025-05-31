const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// TikTok links + desc
const tiktokVideos = [
  { url: "https://vt.tiktok.com/ZSk8J4FBv/", desc: "Dance queen showing moves" },
  { url: "https://vt.tiktok.com/ZSk8JmMGd/", desc: "Cute lip sync vibes" },
  { url: "https://vt.tiktok.com/ZSk8J4kMw/", desc: "Funny reaction video" },
  { url: "https://vt.tiktok.com/ZSk8JaXGq/", desc: "Fashion tips and tricks" },
  { url: "https://vt.tiktok.com/ZSk8JCvRU/", desc: "Travel diary vibes" },
  { url: "https://vt.tiktok.com/ZSk8JH3qP/", desc: "Makeup transformation" },
  { url: "https://vt.tiktok.com/ZSk8Jg1Jh/", desc: "Cute pet moments" },
  { url: "https://vt.tiktok.com/ZSk8Jfk2k/", desc: "Cooking hacks by a foodie" },
  { url: "https://vt.tiktok.com/ZSk8Jx8JX/", desc: "Fitness motivation" },
  { url: "https://vt.tiktok.com/ZSk8J4Hdp/", desc: "Comedy skit queen" },
  { url: "https://vt.tiktok.com/ZSk8J4tKA/", desc: "Daily vlog snippets" }
];

app.get("/tikrandom", async (req, res) => {
  try {
    const random = tiktokVideos[Math.floor(Math.random() * tiktokVideos.length)];
    const videoUrl = random.url;

    const encodedURL = encodeURIComponent(videoUrl);
    const apiURL = `https://www.tikwm.com/api/?url=${encodedURL}`;

    const response = await axios.get(apiURL, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const data = response.data;

    if (!data.data || !data.data.play) {
      return res.status(500).json({ error: "Failed to fetch no watermark video" });
    }

    return res.json({
      url: data.data.play,
      desc: random.desc,
      title: data.data.title || "TikTok clip"
    });

  } catch (err) {
    console.error("❌ API error:", err.message);
    return res.status(500).json({ error: "Failed to fetch no watermark video" });
  }
});

app.get("/", (req, res) => {
  res.send("🎥 Welcome to Female TikTok Random Video API with no watermark (Tikwm)!");
});

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
