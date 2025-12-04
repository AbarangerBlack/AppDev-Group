import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("API Key loaded:", process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 100,
    responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig,
});

app.post("/summarize", async (req, res) => {
    try {
        const text = req.body.text;

        const result = await model.generateContent({
    contents: [{
        role: "user",
        parts: [{
            text: `Summarize this text in very simple words and bullet points:\n\n${text}`
        }]
    }]
});

let summary = result.output[0].content[0].text;

// Convert * bullets to • bullets
summary = summary.replace(/^\s*\*\s+/gm, "• ");

res.json({ summary });


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
