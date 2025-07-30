// quote.js
fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(quotes => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        const quoteText = `"${quote.text}"`;
        const quoteAuthor = quote.author ? `— ${quote.author}` : "— Unknown";
        document.getElementById("quote").textContent = `${quoteText} ${quoteAuthor}`;
    })
    .catch(error => {
        console.error("Something went wrong with the quote API:", error);
        document.getElementById("quote").textContent =
            "“Even when the code is tangled, the princess finds her way.” — Anonymous";
    });
