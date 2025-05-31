const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// TikTok links + desc
const tiktokVideos = [{ url: "https://vt.tiktok.com/ZSk8QUGHj/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QB8we/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QJ7vY/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QBYYP/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QSjVe/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QUT2u/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk89sYVm/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Qf4QX/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QdRhR/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q2RDc/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q2xam/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QLRSR/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QNdJE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QUP4c/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QR7Bv/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Qf7RE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QBCUh/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Qe5Vg/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q8efV/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QXvKR/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QmywE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QWHc8/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q5h7W/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QSJxV/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QFp6p/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QJY92/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q6AkE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QBayJ/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QMEuF/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QsxpY/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QVnm2/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QpysX/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QvsHe/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q9yT5/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QamGS/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QVGq1/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QcU9S/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QmySP/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Qg5No/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q5dQv/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QtGDr/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QmQVX/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q7V8X/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QC71b/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Qubc3/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QmryL/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q4bG2/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QmJKB/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q4j8c/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QsxpY/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QVnm2/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QpysX/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QvsHe/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q9yT5/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QamGS/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QVGq1/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QcU9S/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QmySP/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Qg5No/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q5dQv/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QtGDr/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QTNGo/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C8XCK/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CRDr7/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C6gUT/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CBNtE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CJJX7/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C12T6/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QTM7P/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CFWtX/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CLUgK/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q3VS6/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QTnNa/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CJYXo/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QE6dY/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C153u/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C8gMg/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CJPon/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CS2Ac/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CSJS1/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8ChAgQ/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C15Vp/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QKFxC/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CjhbN/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CS9fM/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C2r1b/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C63jp/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CF3Ho/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QKWcS/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QEyXD/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CAURV/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QTNGo/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C8XCK/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CRDr7/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C6gUT/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CBNtE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CJJX7/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C12T6/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QTM7P/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CFWtX/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CLUgK/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Q3VS6/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QTnNa/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CJYXo/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8QE6dY/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C153u/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C8gMg/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CyKvt/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C5Nnp/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CXnE8/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CssxC/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Cnjfy/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CqScB/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Cs2HT/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Cfn1s/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CXqA7/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Cxx9n/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CPRN5/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CHRTJ/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C5btu/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CfgYN/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C9p7T/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CV38r/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Cpb6n/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CqG1B/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CbsnJ/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CbA2q/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CX1aD/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CCvnr/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CGynP/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CDmjD/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C153u/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8C8gMg/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CowMb/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8X6R7d/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CosvS/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CodKq/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8XjdbA/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8X1mhA/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8CcjxV/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8XLH66/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8Cod2h/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8VXdVk/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8VTHMm/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8VKYtN/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8q14WE/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8V32Ec/", desc: "Thirst trap" },
{ url: "https://vt.tiktok.com/ZSk8q21fs/", desc: "Thirst trap" },

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
