import express from "express";
import cors from "cors";
import { chromium } from "playwright";
import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

app.use(cors());

app.use(bodyParser.json());

app.post("/run-playwright", async (req, res) => {
    const searchQuery = req.body.searchQuery;

    if (!searchQuery) {
        return res.status(400).json({ message: "Search term required." });
    }

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://www.youtube.com");
    await page.fill('input[name="search_query"]', searchQuery);
    await page.press('input[name="search_query"]', "Enter");

    await page.waitForTimeout(5000);

    res.json({ message: `Searching about "${searchQuery}" executed correctly.` });
});

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
