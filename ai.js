import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } 
from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// Read API key from environment and validate
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.warn("Your Gemini API not worked bro!");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 50,
    responseMimeType: "text/plain",
};

async function run() {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });
    const result = await chatSession.sendMessage("essay of fish very simple version, make it bulletin");
    console.log(result.response.text());
};
run();