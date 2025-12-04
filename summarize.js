// Summarize.js
const textBox = document.getElementById("textBox");
const aiBox = document.getElementById("aiBox");
const summarizeBTN = document.getElementById("summarizeBTN");

summarizeBTN.addEventListener("click", async () => {
    const message = textBox.value.trim();
    if (!message) return;

    aiBox.value = "Loading...";

    const res = await fetch("http://localhost:3000/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: message })
    });

    const data = await res.json();
    // support both new `summary` field and older `reply` field
    aiBox.value = data.summary ?? data.reply ?? 'No summary returned.';
});
