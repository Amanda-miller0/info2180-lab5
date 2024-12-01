window.onload = () => {
    const lookupBtn = document.querySelector("#lookup");
    const resultDiv = document.querySelector("#result");

    lookupBtn.addEventListener("click", () => {
        const query = document.querySelector("#country").value;
        if (query.trim() === "") {
            resultDiv.innerHTML = "<p>Please enter a country name.</p>";
            return;
        }

        fetch(`world.php?country=${query}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Fetch error:", error);
                resultDiv.innerHTML = "<p>Error fetching data.</p>";
            });
    });
};
