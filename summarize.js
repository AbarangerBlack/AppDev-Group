// Summarize.js
document.getElementById("summarizeBTN").addEventListener("click", async() => {
    const text = document.getElementById("textBox").value;

    const res = await fetch("http://localhost:3000/summarize", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text})
    });

    const data = await res.json();
    document.getElementById("aiBox").value = data.summary;
});