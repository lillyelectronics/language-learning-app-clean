export async function fetchChatResponse(userMessage) {
    const apiKey = "YOUR_OPENAI_API_KEY"; // Replace this before testing

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful Spanish tutor." },
                { role: "user", content: userMessage }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
