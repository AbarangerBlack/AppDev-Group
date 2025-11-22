import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({apiKey: "AIzaSyCRNbTX4HeCuyuVZtYtWik9fW-Z-eJnyY0"});

app.post("/summarize", async (req, res) => {
    
})


async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Explain how AI works in a few words",
    });
    console.log(response.text);
}

await main();