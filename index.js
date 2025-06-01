const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// TikTok links + desc
const tiktokVideos = [ { url: "https://vt.tiktok.com/ZSkNNuMjW/" }, 
{ url: "https://vt.tiktok.com/ZSkNNVbsy/" }, 
{ url: "https://vt.tiktok.com/ZSkNNkWYt/" }, 
{ url: "https://vt.tiktok.com/ZSkNNg2N1/" }, 
{ url: "https://vt.tiktok.com/ZSkNF8hkJ/" }, 
{ url: "https://vt.tiktok.com/ZSkNFdXhA/" }, 
{ url: "https://vt.tiktok.com/ZSkNNToGP/" }, 
{ url: "https://vt.tiktok.com/ZSkNFdHrW/" }, 
{ url: "https://vt.tiktok.com/ZSkNFNrDH/" }, 
{ url: "https://vt.tiktok.com/ZSkNFNQ4S/" }, 
{ url: "https://vt.tiktok.com/ZSkNNEkh2/" }, 
{ url: "https://vt.tiktok.com/ZSkNNwDUG/" }, 
{ url: "https://vt.tiktok.com/ZSkNNvGJn/" }, 
{ url: "https://vt.tiktok.com/ZSkNF1rTs/" }, 
{ url: "https://vt.tiktok.com/ZSkNFdtvD/" }, 
{ url: "https://vt.tiktok.com/ZSkNF8uRT/" }, 
{ url: "https://vt.tiktok.com/ZSkNN7EVQ/" }, 
{ url: "https://vt.tiktok.com/ZSkNFRmU1/" }, 
{ url: "https://vt.tiktok.com/ZSkNFFB4n/" }, 
{ url: "https://vt.tiktok.com/ZSkNFJkPg/" }, 
{ url: "https://vt.tiktok.com/ZSkNFHXTc/" }, 
{ url: "https://vt.tiktok.com/ZSkNF6moS/" }, 
{ url: "https://vt.tiktok.com/ZSkNFPVNT/" }, 
{ url: "https://vt.tiktok.com/ZSkNF5AxV/" }, 
{ url: "https://vt.tiktok.com/ZSkNFjBrs/" }, 
{ url: "https://vt.tiktok.com/ZSkNFfEFm/" }, 
{ url: "https://vt.tiktok.com/ZSkNFUuYt/" }, 
{ url: "https://vt.tiktok.com/ZSkNFHse3/" }, 
{ url: "https://vt.tiktok.com/ZSkNFYHkg/" }, 
{ url: "https://vt.tiktok.com/ZSk8QUGHj/" },
{ url: "https://vt.tiktok.com/ZSk8QB8we/" },
{ url: "https://vt.tiktok.com/ZSk8QJ7vY/" },
{ url: "https://vt.tiktok.com/ZSk8QBYYP/" },
{ url: "https://vt.tiktok.com/ZSk8QSjVe/" },
{ url: "https://vt.tiktok.com/ZSk8QUT2u/" },
{ url: "https://vt.tiktok.com/ZSk89sYVm/" },
{ url: "https://vt.tiktok.com/ZSk8Qf4QX/" },
{ url: "https://vt.tiktok.com/ZSk8QdRhR/" },
{ url: "https://vt.tiktok.com/ZSk8Q2RDc/" },
{ url: "https://vt.tiktok.com/ZSk8Q2xam/" },
{ url: "https://vt.tiktok.com/ZSk8QLRSR/" },
{ url: "https://vt.tiktok.com/ZSk8QNdJE/" },
{ url: "https://vt.tiktok.com/ZSk8QUP4c/" },
{ url: "https://vt.tiktok.com/ZSk8QR7Bv/" },
{ url: "https://vt.tiktok.com/ZSk8Qf7RE/" },
{ url: "https://vt.tiktok.com/ZSk8QBCUh/" },
{ url: "https://vt.tiktok.com/ZSk8Qe5Vg/" },
{ url: "https://vt.tiktok.com/ZSk8Q8efV/" },
{ url: "https://vt.tiktok.com/ZSk8QXvKR/" },
{ url: "https://vt.tiktok.com/ZSk8QmywE/" },
{ url: "https://vt.tiktok.com/ZSk8QWHc8/" },
{ url: "https://vt.tiktok.com/ZSk8Q5h7W/" },
{ url: "https://vt.tiktok.com/ZSk8QSJxV/" },
{ url: "https://vt.tiktok.com/ZSk8QFp6p/" },
{ url: "https://vt.tiktok.com/ZSk8QJY92/" },
{ url: "https://vt.tiktok.com/ZSk8Q6AkE/" },
{ url: "https://vt.tiktok.com/ZSk8QBayJ/" },
{ url: "https://vt.tiktok.com/ZSk8QMEuF/" },
{ url: "https://vt.tiktok.com/ZSk8QsxpY/" },
{ url: "https://vt.tiktok.com/ZSk8QVnm2/" },
{ url: "https://vt.tiktok.com/ZSk8QpysX/" },
{ url: "https://vt.tiktok.com/ZSk8QvsHe/" },
{ url: "https://vt.tiktok.com/ZSk8Q9yT5/" },
{ url: "https://vt.tiktok.com/ZSk8QamGS/" },
{ url: "https://vt.tiktok.com/ZSk8QVGq1/" },
{ url: "https://vt.tiktok.com/ZSk8QcU9S/" },
{ url: "https://vt.tiktok.com/ZSk8QmySP/" },
{ url: "https://vt.tiktok.com/ZSk8Qg5No/" },
{ url: "https://vt.tiktok.com/ZSk8Q5dQv/" },
{ url: "https://vt.tiktok.com/ZSk8QtGDr/" },
{ url: "https://vt.tiktok.com/ZSk8QmQVX/" },
{ url: "https://vt.tiktok.com/ZSk8Q7V8X/" },
{ url: "https://vt.tiktok.com/ZSk8QC71b/" },
{ url: "https://vt.tiktok.com/ZSk8Qubc3/" },
{ url: "https://vt.tiktok.com/ZSk8QmryL/" },
{ url: "https://vt.tiktok.com/ZSk8Q4bG2/" },
{ url: "https://vt.tiktok.com/ZSk8QmJKB/" },
{ url: "https://vt.tiktok.com/ZSk8Q4j8c/" },
{ url: "https://vt.tiktok.com/ZSk8QsxpY/" },
{ url: "https://vt.tiktok.com/ZSk8QVnm2/" },
{ url: "https://vt.tiktok.com/ZSk8QpysX/" },
{ url: "https://vt.tiktok.com/ZSk8QvsHe/" },
{ url: "https://vt.tiktok.com/ZSk8Q9yT5/" },
{ url: "https://vt.tiktok.com/ZSk8QamGS/" },
{ url: "https://vt.tiktok.com/ZSk8QVGq1/" },
{ url: "https://vt.tiktok.com/ZSk8QcU9S/" },
{ url: "https://vt.tiktok.com/ZSk8QmySP/" },
{ url: "https://vt.tiktok.com/ZSk8Qg5No/" },
{ url: "https://vt.tiktok.com/ZSk8Q5dQv/" },
{ url: "https://vt.tiktok.com/ZSk8QtGDr/" },
{ url: "https://vt.tiktok.com/ZSk8QTNGo/" },
{ url: "https://vt.tiktok.com/ZSk8C8XCK/" },
{ url: "https://vt.tiktok.com/ZSk8CRDr7/" },
{ url: "https://vt.tiktok.com/ZSk8C6gUT/" },
{ url: "https://vt.tiktok.com/ZSk8CBNtE/" },
{ url: "https://vt.tiktok.com/ZSk8CJJX7/" },
{ url: "https://vt.tiktok.com/ZSk8C12T6/" },
{ url: "https://vt.tiktok.com/ZSk8QTM7P/" },
{ url: "https://vt.tiktok.com/ZSk8CFWtX/" },
{ url: "https://vt.tiktok.com/ZSk8CLUgK/" },
{ url: "https://vt.tiktok.com/ZSk8Q3VS6/" },
{ url: "https://vt.tiktok.com/ZSk8QTnNa/" },
{ url: "https://vt.tiktok.com/ZSk8CJYXo/" },
{ url: "https://vt.tiktok.com/ZSk8QE6dY/" },
{ url: "https://vt.tiktok.com/ZSk8C153u/" },
{ url: "https://vt.tiktok.com/ZSk8C8gMg/" },
{ url: "https://vt.tiktok.com/ZSk8CJPon/" },
{ url: "https://vt.tiktok.com/ZSk8CS2Ac/" },
{ url: "https://vt.tiktok.com/ZSk8CSJS1/" },
{ url: "https://vt.tiktok.com/ZSk8ChAgQ/" },
{ url: "https://vt.tiktok.com/ZSk8C15Vp/" },
{ url: "https://vt.tiktok.com/ZSk8QKFxC/" },
{ url: "https://vt.tiktok.com/ZSk8CjhbN/" },
{ url: "https://vt.tiktok.com/ZSk8CS9fM/" },
{ url: "https://vt.tiktok.com/ZSk8C2r1b/" },
{ url: "https://vt.tiktok.com/ZSk8C63jp/" },
{ url: "https://vt.tiktok.com/ZSk8CF3Ho/" },
{ url: "https://vt.tiktok.com/ZSk8QKWcS/" },
{ url: "https://vt.tiktok.com/ZSk8QEyXD/" },
{ url: "https://vt.tiktok.com/ZSk8CAURV/" },
{ url: "https://vt.tiktok.com/ZSk8QTNGo/" },
{ url: "https://vt.tiktok.com/ZSk8C8XCK/" },
{ url: "https://vt.tiktok.com/ZSk8CRDr7/" },
{ url: "https://vt.tiktok.com/ZSk8C6gUT/" },
{ url: "https://vt.tiktok.com/ZSk8CBNtE/" },
{ url: "https://vt.tiktok.com/ZSk8CJJX7/" },
{ url: "https://vt.tiktok.com/ZSk8C12T6/" },
{ url: "https://vt.tiktok.com/ZSk8QTM7P/" },
{ url: "https://vt.tiktok.com/ZSk8CFWtX/" },
{ url: "https://vt.tiktok.com/ZSk8CLUgK/" },
{ url: "https://vt.tiktok.com/ZSk8Q3VS6/" },
{ url: "https://vt.tiktok.com/ZSk8QTnNa/" },
{ url: "https://vt.tiktok.com/ZSk8CJYXo/" },
{ url: "https://vt.tiktok.com/ZSk8QE6dY/" },
{ url: "https://vt.tiktok.com/ZSk8C153u/" },
{ url: "https://vt.tiktok.com/ZSk8C8gMg/" },
{ url: "https://vt.tiktok.com/ZSk8CyKvt/" },
{ url: "https://vt.tiktok.com/ZSk8C5Nnp/" },
{ url: "https://vt.tiktok.com/ZSk8CXnE8/" },
{ url: "https://vt.tiktok.com/ZSk8CssxC/" },
{ url: "https://vt.tiktok.com/ZSk8Cnjfy/" },
{ url: "https://vt.tiktok.com/ZSk8CqScB/" },
{ url: "https://vt.tiktok.com/ZSk8Cs2HT/" },
{ url: "https://vt.tiktok.com/ZSk8Cfn1s/" },
{ url: "https://vt.tiktok.com/ZSk8CXqA7/" },
{ url: "https://vt.tiktok.com/ZSk8Cxx9n/" },
{ url: "https://vt.tiktok.com/ZSk8CPRN5/" },
{ url: "https://vt.tiktok.com/ZSk8CHRTJ/" },
{ url: "https://vt.tiktok.com/ZSk8C5btu/" },
{ url: "https://vt.tiktok.com/ZSk8CfgYN/" },
{ url: "https://vt.tiktok.com/ZSk8C9p7T/" },
{ url: "https://vt.tiktok.com/ZSk8CV38r/" },
{ url: "https://vt.tiktok.com/ZSk8Cpb6n/" },
{ url: "https://vt.tiktok.com/ZSk8CqG1B/" },
{ url: "https://vt.tiktok.com/ZSk8CbsnJ/" },
{ url: "https://vt.tiktok.com/ZSk8CbA2q/" },
{ url: "https://vt.tiktok.com/ZSk8CX1aD/" },
{ url: "https://vt.tiktok.com/ZSk8CCvnr/" },
{ url: "https://vt.tiktok.com/ZSk8CGynP/" },
{ url: "https://vt.tiktok.com/ZSk8CDmjD/" },
{ url: "https://vt.tiktok.com/ZSk8C153u/" },
{ url: "https://vt.tiktok.com/ZSk8C8gMg/" },
{ url: "https://vt.tiktok.com/ZSk8CowMb/" },
{ url: "https://vt.tiktok.com/ZSk8X6R7d/" },
{ url: "https://vt.tiktok.com/ZSk8CosvS/" },
{ url: "https://vt.tiktok.com/ZSk8CodKq/" },
{ url: "https://vt.tiktok.com/ZSk8XjdbA/" },
{ url: "https://vt.tiktok.com/ZSk8X1mhA/" },
{ url: "https://vt.tiktok.com/ZSk8CcjxV/" },
{ url: "https://vt.tiktok.com/ZSk8XLH66/" },
{ url: "https://vt.tiktok.com/ZSk8Cod2h/" },
{ url: "https://vt.tiktok.com/ZSk8VXdVk/" },
{ url: "https://vt.tiktok.com/ZSk8VTHMm/" },
{ url: "https://vt.tiktok.com/ZSk8VKYtN/" },
{ url: "https://vt.tiktok.com/ZSk8q14WE/" },
{ url: "https://vt.tiktok.com/ZSk8V32Ec/" },
{ url: "https://vt.tiktok.com/ZSk8q21fs/" },
{ url: "https://vt.tiktok.com/ZSk8pJ5yT/" },
{ url: "https://vt.tiktok.com/ZSk8gKghJ/" }, 

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
