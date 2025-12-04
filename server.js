import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize client
const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

// Get a generative model instance
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post("/summarize", async (req, res) => {
  try {
    const text = req.body.text?.trim() ?? '';
    if (!text) return res.status(400).json({ error: "No text provided" });

    // Generate summary
    const response = await model.generateContent({
      // prompt as user input
      contents: [
        {
          role: "user",
          parts: [
            { text: `Summarize this text in very simple words and bullet points:\n\n${text}` }
          ]
        }
      ]
    });

    console.log("Full API response:", response);

    // Safely extract the text
    const summary =
      response?.candidates?.[0]?.content?.[0]?.text ||
      response?.outputs?.[0]?.content?.[0]?.text ||
      "No summary generated.";

    res.json({ summary, reply: summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
