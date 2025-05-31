const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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

// Function to scrape TikTok video page and extract no watermark video URL
async function scrapeNoWatermarkVideo(tiktokUrl) {
  try {
    const response = await axios.get(tiktokUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        // TikTok sometimes requires user agent to serve full HTML page
      },
    });

    const html = response.data;
    // TikTok embeds video info in a script tag with id="__NEXT_DATA__"
    const jsonStr = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/);

    if (!jsonStr) {
      throw new Error("No JSON data found on TikTok page");
    }

    const jsonData = JSON.parse(jsonStr[1]);
    // Navigate JSON to video URL - depends on TikTok page structure
    const videoData =
      jsonData.props.pageProps.itemInfo.itemStruct.video.playAddr;

    // playAddr may contain watermarked video, so let's try playAddrNoWaterMark if available
    const playAddrNoWM =
      jsonData.props.pageProps.itemInfo.itemStruct.video.playAddrNoWaterMark;

    // Prefer no watermark video if available
    return playAddrNoWM || videoData;
  } catch (err) {
    console.error("❌ Error scraping TikTok video:", err.message);
    return null;
  }
}

app.get("/tikrandom", async (req, res) => {
  const randomIndex = Math.floor(Math.random() * tiktokVideos.length);
  const video = tiktokVideos[randomIndex];

  const noWatermarkUrl = await scrapeNoWatermarkVideo(video.url);

  if (!noWatermarkUrl) {
    return res.status(500).json({ error: "Failed to fetch no watermark video" });
  }

  res.json({
    playUrl: noWatermarkUrl,
    desc: video.desc,
    originalUrl: video.url,
  });
});

app.get("/", (req, res) => {
  res.send("📺 Welcome to Female TikTok Random Video API with no watermark scraper!");
});

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
